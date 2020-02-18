class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.like_dislike = params[:like_dislike]
        if like.save
            render json: ["OK"], status: 200
        else
            render json: ["Error. Can't like at the moment"], status: 404
        end
    end

    def update
        like = Like.find_by(like_params)
        like.like_dislike = params[:like_dislike]
        if like.save
            render json: ["Saved"], status: 200
        else
            render json: ["Error. Can't update like"], status: 404
        end
    end

    def destroy
        like = Like.find_by(like_params)
        if like.destroy
            render json: ["Unliked"], status: 200
        else
            render json: ["Error. Can't unlike"], status: 404
        end
    end
    private
    def like_params
        params.permit(:likeable_type, :likeable_id, :user_id)
    end
end
