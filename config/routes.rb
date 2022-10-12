Rails.application.routes.draw do
 #log in
 post "/login", to: "sessions#create"
 get "/auth", to: "users#show"

end
