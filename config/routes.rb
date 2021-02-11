Rails.application.routes.draw do
  namespace :api do
    get '/quotes/:date', to: 'quotes#index'
    resources :shares, only: %i[index show]
  end

  root 'home#index'
  get '/*path' => 'home#index'
end
