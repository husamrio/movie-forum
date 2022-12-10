class MovieReviewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_path, :overview, :vote_average
  has_many :reviews
end
