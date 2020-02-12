class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :response_to
      t.integer :video_id
      t.integer :commenter_id, null: false
      t.timestamps
    end
    add_index :comments, :response_to
    add_index :comments, :video_id
    add_index :comments, :commenter_id
  end
end
