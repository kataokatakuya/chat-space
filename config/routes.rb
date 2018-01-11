Rails.application.routes.draw do

  devise_for :users
  root to: 'groups#index'
  resource :user, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index]
  end

end
