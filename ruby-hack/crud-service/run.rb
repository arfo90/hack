require_relative 'lib/crudApp'

# crud_agent = Crudapp::CrudAgent.new
#
# user_model = Crudapp::Model::UserModel.new
#
# crud_agent.put_something
#
# user_model.username = 'test1'
# user_model.name = 'nameee'
#
# user_model.save

new_user_data = { username: '007', name: 'james bond'}

user_service = Crudapp::Service::UserService.new
# user_service.create_new_user new_user_data

p user_service.retrive_user_by_id(2).to_json
