module Crudapp
  module Representer
    class UserRepresenter < Crudapp::Representer::BaseRepresenter
      property :username, :name
    end
  end
end
