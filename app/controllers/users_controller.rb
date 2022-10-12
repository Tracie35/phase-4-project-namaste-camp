class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create]
rescue_from ActiveRecord: :RecordInvalid, with: :render_unprocessable_entity

def show
    current_user = User.find(session[user_id])
    render json: current_user
end

def create
    user = User.create!(user_params)
    render json: user
end

private 
#error handling
def render_unprocessable_entity(invalid)
    render json:{error:invalid.record.errors}, status: :render_unprocessable_entity
end

#params
def user_params
    params.permit[:username, :password]
end


end
