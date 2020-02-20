export const uploadVideo = video =>{
    return $.ajax({
        method: "POST",
        url: "/api/videos",
        data: video, 
        contentType: false,
        processData: false,
    })
}

export const getVideos = videoList =>{
    return $.ajax({
        method: "GET",
        url: "/api/videos",
        data: {video_list: videoList}
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

export const searchVideos = search =>{
    return $.ajax({
        method: "GET",
        url: "api/video_search",
        data: {search}
    })
}