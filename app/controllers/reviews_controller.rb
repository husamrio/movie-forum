class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_found_method

    def index 
        render json: Review.all 
    end

    def create
        byebug
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:used_id])
        review = review.create!(rating: reviews_params[:rating], comment: reviews_params[:comment], movie_id: reviews_params[:movie_id], user_id: user.id)
        render json: review, status: :created
    end

    def show 
        review = Review.find_by(id: params[:id])
        if review.valid?
            render json: review, status: :ok
        else
            render json: {error: 'Review not found'}, status: :not_found
        end
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy 
        render json: review, status: :no_content 
    end

    def update 
        review = Review.find(params[:id])
        review.update!(reviews_params)
        render json: review, status: :accepted
    end

    private 
    def reviews_params
        params.permit(:movie_id, :comment, :rating)
    end

    def record_not_found_method
        render json:{error:"Movie not found"}, status: :not_found
    end
end
