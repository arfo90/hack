require 'mysql2'
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter  => 'mysql2',
  :database => 'crudApp',
  :username => 'root',
  :password => '1',
  :host     => 'localhost')
