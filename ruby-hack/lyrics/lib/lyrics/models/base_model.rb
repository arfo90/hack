require 'mongoid'
Mongoid.load!('../../env/dev/mongoid.yml')

class BaseModel
  include Mongoid::Document
end