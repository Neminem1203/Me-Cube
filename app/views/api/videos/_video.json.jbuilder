json.extract! video, :id, :title, :description, :creator_id
json.created_at video.created_at.httpdate.split(" ")[1..3].join(" ")
json.creator_username User.find(video.creator_id).username
json.views "9.1M"
if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
end