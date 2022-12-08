class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_path, :overview, :vote_average
end
