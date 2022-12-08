class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_found_method

    def index 
        render json: Review.all 
    end

    def create
        review = Review.new(reviews_params)
        if review.save
            render json: review, status: :created
        else
            render json: {error: review.errors.full_messages}, status: :unprocessable_entity
        end
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
        params.permit(:user_id, :movie_id, :comment, :star_rating)
    end

    def record_not_found_method
        render json:{error:"Movie not found"}, status: :not_found
    end
end
