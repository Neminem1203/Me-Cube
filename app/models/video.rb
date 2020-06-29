# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  title       :string           not null
#  views       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator_id  :integer          not null
#
# Indexes
#
#  index_videos_on_creator_id  (creator_id)
#  index_videos_on_title       (title)
#

class Video < ApplicationRecord
    validates :title, :description, :creator_id, presence: true

    belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

    has_many :likes, as: :likeable
    has_many :comments, as: :commentable

    has_one_attached :thumbnail
    has_one_attached :video
end
