Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "home#index"

  get '/skills', to: 'skills#index'
  get '/projects', to: 'projects#index'
  get '/pricing', to: 'pricing#index'
  get '/about', to: 'about#index'

  resources :payments

  post '/set_locale', to: 'application#set_locale'
end
