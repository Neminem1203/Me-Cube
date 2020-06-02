class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.like_dislike = params[:like_dislike]
        if like.save
            @likes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: true)
            @dislikes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: false)
            if(params[:likeable_type] == "Comment")
                @comment = Comment.find(params[:likeable_id])
            end
            render :show
        else
            render json: ["Error. Can't like at the moment"], status: 404
        end
    end

    def update
        like = Like.find_by(like_params)
        like.like_dislike = params[:like_dislike]
        if like.save
            @likes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: true)
            @dislikes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: false)
            if(params[:likeable_type] == "Comment")
                @comment = Comment.find(params[:likeable_id])
            end
            render :show
        else
            render json: ["Error. Can't update like"], status: 404
        end
    end

    def destroy
        like = Like.find_by(like_params)
        if like.destroy
            @likes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: true)
            @dislikes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: false)
            if(params[:likeable_type] == "Comment")
                @comment = Comment.find(params[:likeable_id])
            end
            render :show
        else
            render json: ["Error. Can't unlike"], status: 404
        end
    end

    def comment_likes
        @likes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: true)
        @dislikes = Like.where(user_id: params[:user_id], likeable_type: "Comment", like_dislike: false)
        render :show
    end

    private
    def like_params
        params.permit(:likeable_type, :likeable_id, :user_id)
    end
end
