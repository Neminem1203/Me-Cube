class Api::SubscriptionsController < ApplicationController
    def create
        new_sub = Subscription.new(subscription_params)
        if new_sub.save
            @user = new_sub.subscriber
            render :show
        else
            render json: new_sub.errors.full_messages, status: 422
        end
    end

    def destroy
        old_sub = Subscription.find_by(subscription_params)
        if old_sub.delete
            @user = old_sub.subscriber
            render :show
        else
            render json old_sub.errors.full_messsages, status: 422
        end
    end

    private
    def subscription_params
        params.permit(:channel_id, :subscriber_id)
    end
end