class AddViewsToVideo < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer, :null => false, :default => 0
  end
end
