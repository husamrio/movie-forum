class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

    def index 
        render json: User.all, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
end
