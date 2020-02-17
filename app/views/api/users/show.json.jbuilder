json.partial! "api/users/user", user: @user
json.videos do
    json.array! @user.videos.map{|video| video.id}
end