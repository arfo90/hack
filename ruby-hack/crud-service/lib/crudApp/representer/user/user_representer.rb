module Crudapp
  module Representer
    class UserRepresenter < Crudapp::Representer::BaseRepresenter
      include Roar::Json
    end
  end
end
