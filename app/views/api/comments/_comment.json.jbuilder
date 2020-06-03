json.set! comment.id do
    json.extract! comment, :id, :comment, :commenter_id, :commentable_type, :commentable_id
    if(comment.commentable_type == "Video")
        json.replies do
            json.array! comment.comments.map{|reply| reply.id}
        end
    else
        json.replies do
            json.array! []
        end
    end
    json.likes comment.likes.where(like_dislike: true).length
    json.dislikes comment.likes.where(like_dislike: false).length
    json.created_at comment.created_at.httpdate.split(" ")[1..3].join(" ")
end