Rails.application.routes.draw do
  root 'peoples#index'
  resources :peoples
  post "peoples/[:id]" => "peoples#update"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
