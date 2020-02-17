json.extract! video, :id, :title, :description, :creator_id
json.created_at video.created_at.httpdate.split(" ")[1..3].join(" ")

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
end