Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root 'posts#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:index, :show]
      get 'authenticate_user', to: 'users#authenticate_user'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
