$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))
require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

module Crudapp
 ## autoload classes here
 autoload :CrudAgent, 'crudApp/crudAgent.rb'

 module Model
 	autoload :UserModel, 'crudApp/models/userModel.rb'
 end
end
