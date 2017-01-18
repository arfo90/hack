module Crudapp
  module Service
    class UserService
      def initialize
        @user_model = Crudapp::Model::UserModel
      end

      def retrive_all_users
        @user_model.all
      end

      def retrive_user_by_id user_id
        @user_model.find user_id
      end

      def create_new_user param
        user = Crudapp::Model::UserModel.new
        user.name = param[:name]
        user.username = param[:username]
        user.save
      end

      def update_user user_id, params
        @user_model.update user_id params
      end

      def delete_user_by_id user_id
        @user_model.delete user_id
      end
    end
  end
end
