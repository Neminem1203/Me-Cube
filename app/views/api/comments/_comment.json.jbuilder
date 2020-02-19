json.set! comment.id do
    json.extract! comment, :id, :comment, :commenter_id, :commentable_type, :commentable_id
    if(comment.commentable_type == "Video")
        json.replies do
            json.array! comment.comments.map{|reply| reply.id}
        end
    end
    json.created_at comment.created_at.httpdate.split(" ")[1..3].join(" ")
end