Rails.application.routes.draw do
  root 'pages#home'

  scope :api, defaults: {format: :json} do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :jobs, except: [:new, :edit, :show]
    resources :messages, except: [:new, :edit, :update, :show]
    resources :projects, except: [:new, :edit, :show]
    resources :photos, except: [:new, :edit, :show]
    resources :resume, except: [:new, :edit, :index, :show]
    match 'resume', to: 'resume#show', via: :get
  end

  resources :jobs, except: [:create, :update]
  resources :projects, except: [:create, :update]
  resources :photos, except: [:show, :create, :update]
  resources :messages, except: [:edit, :create, :update]
  resources :resume, only: [:new]

  match 'modeling', to: 'photos#index', via: :get
  match 'portfolio', to: 'pages#portfolio', via: :get
  match 'contact', to: 'messages#new', via: :get
  match 'about', to: 'pages#about', via: :get
  match 'login', to: 'sessions#new', via: :get
  match 'resume', to: 'resume#show', via: :get

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
