class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :poster_path, :vote_average
end
