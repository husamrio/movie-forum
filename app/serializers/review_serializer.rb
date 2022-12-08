class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :comment, :star_rating
  
  belongs_to :movie
  belongs_to :user
end
