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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
