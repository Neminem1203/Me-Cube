class Api::UsersController < ApplicationController
    def index
        # params[:user_list] is array of users
        # @users = User.find(params[:user_list])
        @users = User.all
    end

    def create
        @user = User.new(user_params)
        if(@user.save)
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def update
        @user = current_user
        if current_user.username == params[:username] || current_user.update(username: params[:username])
            if(params[:profilePicFile])
                @user.profile_picture.attach(io: params[:profilePicFile], filename: "profile-pic-"+current_user.id.to_s+".jpg")
            end
            render :show
        else
            render json: current_user.errors.full_messages
        end
    end

    def destroy

    end
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
