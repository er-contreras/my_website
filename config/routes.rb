Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "home#index"

  get '/curriculum', to: 'curriculum#index'
  get '/projects', to: 'projects#index'
  get '/pricing', to: 'pricing#index'
  get '/about', to: 'about#index'

  resources :payments
end
