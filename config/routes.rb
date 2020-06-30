Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]

    resources :videos, only: [:index, :create, :update, :show]
    get '/video_search/', to: 'videos#search', as: "videosearch"
    get '/view_video/:videoId', to: 'videos#viewcount', as: "viewcount"

    resources :comments, only: [:index, :create, :update, :show, :destroy]
    get '/get_replies/:comment_id', to: 'comments#replies', as: 'getreplies'

    resource :likes, only: [:create, :update, :destroy]
    get '/comments_likes/:user_id', to: 'likes#comment_likes', as: "usercommentlikes"

    resource :session, only: [:create, :destroy]

    resource :subscription, only: [:create, :destroy]
  end
  
  root to: "static_pages#root"
end
