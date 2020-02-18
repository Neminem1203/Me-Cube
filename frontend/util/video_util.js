export const uploadVideo = video =>{
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/videos",
        data: video, 
        contentType: false,
        processData: false,
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