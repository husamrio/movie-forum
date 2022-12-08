class Review < ApplicationRecord
    belongs_to :movie 
    belongs_to :user 

    validates :star_rating, :numericality => {greater_than_or_equal_to: 1, less_than_or_equal_to: 10} 
end
