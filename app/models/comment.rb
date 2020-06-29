# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  comment          :text             not null
#  commentable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  commentable_id   :bigint
#  commenter_id     :integer          not null
#
# Indexes
#
#  index_comments_on_commentable_type_and_commentable_id  (commentable_type,commentable_id)
#  index_comments_on_commenter_id                         (commenter_id)
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
