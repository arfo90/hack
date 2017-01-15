require_relative 'base'

module Crudapp
  module Model
    class UserModel < ActiveRecord::Base
      self.table_name = "user"
      validates :username, presence: true
    end
  end
end
