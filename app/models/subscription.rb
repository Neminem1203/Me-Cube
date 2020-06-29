# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  channel_id    :bigint
#  subscriber_id :bigint
#
# Indexes
#
#  index_subscriptions_on_channel_id_and_subscriber_id  (channel_id,subscriber_id) UNIQUE
#

class Subscription < ApplicationRecord
    belongs_to :channel,
        class_name: :User,
        primary_key: :id,
        foreign_key: :channel_id
    
    belongs_to :subscriber,
        class_name: :User,
        primary_key: :id,
        foreign_key: :subscriber_id
end
