export const getComments = comments =>{
    return $.ajax({
        method: "GET",
        url: "/api/comments",
        data: {comments}
    })
}

export const createComment = comment =>{
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: comment
    })
}

export const updateComment = comment =>{
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: comment
    })
}

export const destroyComment = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}