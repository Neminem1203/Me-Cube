
json.extract! user, :id, :username, :email
json.subscribers user.subscribers.length
json.subscriptions do
    json.array! user.subscriptions.map{|subscription| subscription.channel_id}
end
if user.profile_picture.attached?
    json.profile_picture url_for(user.profile_picture)
end