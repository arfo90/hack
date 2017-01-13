require_relative 'lib/crudApp'

crud_agent = Crudapp::CrudAgent.new

user_model = Crudapp::Model::UserModel.new

crud_agent.put_something

user_model.username = 'test1'
user_model.name = 'nameee'

user_model.save

user_model.puts_s