class Api::VideosController < ApplicationController
    def index
        # @videos = Video.all
        if(params[:video_list] && params[:video_list].class == Array)
            @videos = Video.find(params[:video_list]).limit(8)
        else
            # TODO: Experimental Random Videos
            vid_count = Video.count
            random_videos = Video.all.map{|vid| vid.id}
            if(vid_count > 8)
                random_videos = random_videos.shuffle
                @videos = Video.find(random_videos[0..7])
            else
                @videos = Video.find(random_videos)
            end
        end
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
        @video = Video.find_by(id: params[:id])
        if @video
            render :show
        else
            render json: ["Error. Video not found"], status: 404
        end
    end
    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
