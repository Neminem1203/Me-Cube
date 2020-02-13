class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :commenter_id, null: false
      t.references :commentable, polymorphic: true, index: true
      t.timestamps
    end
    add_index :comments, :commenter_id
  end
end
