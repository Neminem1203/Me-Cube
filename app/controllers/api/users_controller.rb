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

    end

    def destroy

    end
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
