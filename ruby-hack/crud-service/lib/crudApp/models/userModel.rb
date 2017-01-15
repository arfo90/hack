require_relative 'base'

module Crudapp 
  module Model
		class UserModel < ActiveRecord::Base
	  	self.table_name = "user"
	  	def puts_s
				p 'testing'
	  	end
		end
  end
end