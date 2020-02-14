class Api::UsersController < ApplicationController
    def index
        # params[:user_list] is array of users
        @users = User.find(params[:user_list])
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
        if current_user.username == params[:username] || current_user.update(username: params[:username])
            debugger
            current_user.profile_pic.attach(io: params[:profilePicFile], filename: "profile-pic-"+current_user.id)

        else
            render json: current_user.errors.full_messages
        end

        return json: [], status: 200
    end

    def destroy

    end
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
