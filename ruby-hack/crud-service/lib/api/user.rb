module Crudapp
  module API
    class User < Grape::API
      version 'v1', using: :header, vendor: 'crudapp'

      resource :user do
        desc 'Create a status.'
        params do
          # requires :status, type: String, desc: 'Your status.'
        end
        post do
          puts 'test'
        end
      end
    end
  end
end
