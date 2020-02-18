json.partial! "api/users/user", user: @user
json.videos do
    json.array! @user.videos.map{|video| video.id}
    # @user.videos.each do |video|
    #     json.set! video.id
    #     json.extract! video, :id, :title
    # end
end