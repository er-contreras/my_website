Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "home#index"

  get '/blog', to: 'blog#index'
  get '/projects', to: 'projects#index'
  get '/services', to: 'services#index'
end
