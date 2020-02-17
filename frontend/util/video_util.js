export const uploadVideo = video =>{
    return $.ajax({
        method: "POST",
        url: "/api/videos",
        data: {video}
    })
}

export const getVideos = () =>{
    return $.ajax({
        method: "GET",
        url: "/api/videos"
    })
}

export const getVideo = videoId =>{
    return $.ajax({
        method: "GET",
        url: `/api/videos/${videoId}`
    })
}

export const updateVideo = video =>{
    return $.ajax({
        method: "PATCH",
        url: `api/videos/${video.id}`,
        data: {video}
    })
}