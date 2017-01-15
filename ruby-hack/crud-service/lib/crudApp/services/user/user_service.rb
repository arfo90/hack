module Crudapp
  module Service
    class UserService
      def create_new_user param
        user = Crudapp::Model::UserModel.new
        user.name = param[:name]
        user.username = param[:username]
        user.save
      end
    end
  end
end
