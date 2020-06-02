json.partial! "api/users/user", user: @user
json.videos do
    json.array! @user.videos.map{|video| video.id}
    # @user.videos.each do |video|
    #     json.set! video.id
    #     json.extract! video, :id, :title
    # end
end
json.liked_comments do
    json.array! @user.likes.where(likeable_type: "Comment", like_dislike: true).map{|comment| comment.id}
end

json.disliked_comments do
    json.array! @user.likes.where(likeable_type: "Comment", like_dislike: false).map{|comment| comment.id}
end