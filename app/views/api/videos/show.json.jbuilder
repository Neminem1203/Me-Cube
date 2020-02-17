json.partial! "api/videos/video", video: @video
if @video.video.attached?
    json.videoUrl url_for(@video.video)
end
if current_user
    current_users_like = @video.likes.where(user_id: current_user.id)
    if(current_users_like.length == 1)
        json.like_dislike current_users_like[0].like_dislike
    end
end
json.likes @video.likes.where("like_dislike = true").count
json.dislikes @video.likes.where("like_dislike = false").count
