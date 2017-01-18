module Crudapp
  module API
    class User < Grape::API
      version 'v1', using: :header, vendor: 'crudapp'

      resource :users do
        desc 'Retrive all users'
        get :all do

        end

        get do
          begin
            user_service = Crudapp::Service::UserService.new
            user_service.retrive_all_users.to_json
          rescue Exception => e
            p e
          end
        end

        desc 'Return a status.'
        params do
          requires :user_id, type: Integer, desc: 'User id.'
        end
        route_param :user_id do
          get do
            begin
              user_service = Crudapp::Service::UserService.new
              user_service.retrive_user_by_id(params[:user_id]).to_json
            rescue Exception => e
              p e
            end
          end
        end

        desc 'Delete a user'
          params do
            requires :user_id, type: Integer, desc: 'User id.'
          end
          delete ':user_id' do
            # authenticate!
            begin
              user_service = Crudapp::Service::UserService.new
              user_service.delete_user_by_id(params[:user_id])
            rescue Exception => e
              p e
            end
          end

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
