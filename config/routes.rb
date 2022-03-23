Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get 'all_data', to:"appointments#all_data"
    resources :doctors
    resources :patients
    resources :appointments
  end
end
