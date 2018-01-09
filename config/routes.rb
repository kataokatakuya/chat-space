Rails.application.routes.draw do

  devise_for :users
  root to: "messages#index"
  resource :user, only: [:edit, :update]
  # resources :messages, only: [:index]

end
