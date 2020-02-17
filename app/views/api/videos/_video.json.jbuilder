json.extract! video, :id, :title, :description, :creator_id

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
end