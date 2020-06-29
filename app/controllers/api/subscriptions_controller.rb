class Api::SubscriptionsController < ApplicationController
    def index
        
        if !params[:subscriber_id]:
            return
        elsif !params[:channel_id]:
            return
        else:
            return
    end
    
    def create
    end

    def destroy
    end
end