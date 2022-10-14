Rails.application.routes.draw do
    resources :users, only: [:create, :show] 
    resources :activities
    resources :services
    resources :admins, only: [:index, :show, :create, :update, :destroy]
 #log in
 get "/users", to:"users#index"
 post "/login", to: "sessions#create"
 get "/auth", to: "users#show"
 post "/signup", to: "users#create"
end
