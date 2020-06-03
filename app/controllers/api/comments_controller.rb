class Api::CommentsController < ApplicationController
    def index
        if params[:comments].class == String
            @comments = Comment.find(params[:comments][1..-2].split(",").map{|num| num.to_i})
        elsif params[:comments].class == Array
            @comments = Comment.find(params[:comments])
        else
            @comments = Comment.all
        end
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.comment = params[:comment]
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(comment_params)
        if @comment.update(comment: params[:comment])
            render :show
        else
            render json: ["Couldn't update comment at this time"], status: 400
        end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment
            render :show
        else
            render json: ["Error. Comment not found"], status: 404
        end
    end


    def destroy
        @comment = Comment.find_by(comment_params)
        if @comment.destroy
            if params[:commentable_type] == "Video"
                @comments = Video.find_by(id: params[:commentable_id]).comments
            else
                @comments = Comment.find_by(id: params[:commentable_id])
            end
            render :index
        else
            render json: ["Couldn't delete comment at this time"], status: 404
        end
    end

    private
    def comment_params
        params.permit(:commenter_id, :commentable_type, :commentable_id)
    end
end
