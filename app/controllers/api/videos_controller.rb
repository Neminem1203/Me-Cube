class Api::VideosController < ApplicationController
    def index
        # if(params[:video_list] === "all")
        #     @videos = Video.all
        # else
        #     @videos = Video.find(params[:video_list])
        # end
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id
        if @video.save
            video_file = params[:video][:videoFile]
            thumbnail = params[:video][:thumbnailFile]
            @video.video.attach(io: video_file, filename: "video-"+@video.id.to_s)
            @video.thumbnail.attach(io: thumbnail, filename: "thumbnail-"+@video.id.to_s)
            render :show
        else
            render json: @video.errors.full_messages
        end
    end

    def update
        @video = Video.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages
        end
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end
    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
