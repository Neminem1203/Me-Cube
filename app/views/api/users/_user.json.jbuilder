
json.extract! user, :id, :username, :email
if user.profile_picture.attached?
    json.profile_picture url_for(user.profile_picture)
end