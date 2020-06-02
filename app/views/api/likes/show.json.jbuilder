json.liked_comments do
    json.array! @likes.map{|like| like.likeable_id}
end

json.disliked_comments do
    json.array! @dislikes.map{|dislike| dislike.likeable_id}
end

if @comment
    json.comment do
        json.partial! "/api/comments/comment", comment: @comment
    end
end