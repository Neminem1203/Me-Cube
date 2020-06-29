# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  like_dislike  :boolean          not null
#  likeable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_id   :bigint
#  user_id       :integer          not null
#
# Indexes
#
#  index_likes_on_likeable_type_and_likeable_id  (likeable_type,likeable_id)
#  index_likes_on_user_id                        (user_id)
#

class Like < ApplicationRecord
    belongs_to :likeable, polymorphic: true
    validates :user_id, uniqueness: {scope: [:likeable_type, :likeable_id]}

    belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
end
