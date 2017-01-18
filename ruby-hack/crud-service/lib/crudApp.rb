$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))
require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

module Crudapp
 ## autoload classes here
 autoload :CrudAgent, 'crudApp/crudAgent.rb'

 module Model
 	autoload :UserModel, 'crudApp/models/user_model.rb'
 end

 module Service
   autoload :UserService, 'crudApp/services/user/user_service.rb'
 end

 module Representer
   autoload :BaseRepresenter, 'crudApp/representer/base_representer.rb'
   autoload :UserRepresenter, 'crudApp/representer/user/user_representer.rb'
 end

 module API
	autoload :User, 'api/user.rb'

	class Mount < Grape::API
		mount Crudapp::API::User
	end
 end
end
