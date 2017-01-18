require 'roar/decorator'
require 'roar/json'

module Crudapp
  module Representer
    class BaseRepresenter < Roar::Decorator
      include Roar::Json
    end
  end
end
