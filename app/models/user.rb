# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#

class User < ApplicationRecord
    validates :username, :email, :session_token,:password_digest, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_one_attached :profile_picture

    has_many :likes, 
        class_name: "Like",
        primary_key: :id,
        foreign_key: :user_id
    
    has_many :comments,
        class_name: "Comment",
        primary_key: :id,
        foreign_key: :commenter_id
    
    has_many :videos,
    class_name: "Video",
    primary_key: :id,
    foreign_key: :creator_id,
    dependent: :destroy

    has_many :subscriptions,
        class_name: "Subscription",
        primary_key: :id,
        foreign_key: :subscriber_id

    has_many :subscribers,
        class_name: "Subscription",
        primary_key: :id,
        foreign_key: :channel_id
    
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username,password)
        @user = User.find_by_username(username: username)
        if @user && @user.is_password?(password)
            return @user
        end
        nil
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_unique_session_token
        session_token = SecureRandom.urlsafe_base64
        if User.find_by(session_token: session_token)
            session_token = SecureRandom.urlsafe_base64
        end
        return session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token
        new_session_token = generate_unique_session_token
        self.update!(session_token: new_session_token)
        new_session_token
    end
end
