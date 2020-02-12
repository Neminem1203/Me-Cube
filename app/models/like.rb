# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  like_dislike  :boolean          not null
#  user_id       :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
    belongs_to :likeable, polymorphic: true

    belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
end
