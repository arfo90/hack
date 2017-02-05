module Crudapp
  module Representer
    class UserRepresenter < Crudapp::Representer::BaseRepresenter
      property :username
      property :name, type: String
    end
  end
end
