json.partial! "api/videos/video", video: @video
if @video.video.attached?
    json.videoUrl url_for(@video.video)
end