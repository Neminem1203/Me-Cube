# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  comment      :text             not null
#  response_to  :integer
#  video_id     :integer
#  commenter_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#


class Comment < ApplicationRecord
    has_many :likes, as :likeable

    belongs_to :commenter,
    class_name: "User",
    primary_key: :id,
    foreign_key: :commenter_id

    belongs_to :video,
    class_name: "Video",
    primary_key: :id,
    foreign_key: :video_id

    has_many :responses,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :response_to

    belongs_to :parent_response,
    class_name: "Comment",
    primay_key: :id,
    foreign_key: :response_to
end
