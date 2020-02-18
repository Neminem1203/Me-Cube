
export const createLike = like => {
    return $.ajax({
        method: "POST", 
        url: "/api/likes",
        data: like
    })
}

export const updateLike = like => {
    return $.ajax({
        method: "PATCH",
        url: "/api/likes",
        data: like
    })
}

export const destroyLike = like => {
    return $.ajax({
        method: "DELETE",
        url: "/api/likes",
        data: like
    })
}
