Rails.application.routes.draw do
  root 'api/v1/greetings#index'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: %i[index]
    end
  end
end
