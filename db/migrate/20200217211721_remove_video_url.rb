class RemoveVideoUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :video_url
  end
end
