Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :show, :update, :destroy]
  resources :movies, only: [:index, :show]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
