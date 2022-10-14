class SessionsController < ApplicationController
  # skip_before_action :authorized, only: :create
  #     def index
  #       session[:session_hello] ||= "User"
  #       cookies[:cookies_hello] ||= "User"
  #       render json: { session: session, cookies: cookies.to_hash }
  #     end

      def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
        else 
          render json: {error:{login:"invalid username or password"}}, status: :unauthorized
        end
        

      end

      def destroy
        session.delete :user_id
        head :no_content
      end
end
