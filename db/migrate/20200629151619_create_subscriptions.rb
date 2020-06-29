class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.bigint :channel_id
      t.bigint :subscriber_id
    end
    add_index :subscriptions, [:channel_id, :subscriber_id], unique: true
  end
end
