class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.is_password?(params[:password])
            log_in(@user)
            render "api/users/show"
        else
            render json: ["Invalid Credentials"], status: 404
        end
    end


    def destroy 
      if log_out!
        render json: {}
      else
        render json: ['Not Logged In'], status: 404  
      end
    end
end
