# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  comment          :text             not null
#  commenter_id     :integer          not null
#  commentable_type :string
#  commentable_id   :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#



class Comment < ApplicationRecord
    has_many :likes, as: :likeable
    belongs_to :commentable, polymorphic: true
    has_many :comments, as: :commentable

    belongs_to :commenter,
        class_name: "User",
        primary_key: :id,
        foreign_key: :commenter_id
    

end
