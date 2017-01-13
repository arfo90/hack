require_relative 'lib/crudApp'

crud_agent = Crudapp::CrudAgent.new

user_model = Crudapp::Model::UserModel.new

crud_agent.put_something

user_model.puts_s