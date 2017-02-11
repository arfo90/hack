require 'mongoid'
Mongoid.load!('/home/arfo/development/repos/hack/ruby-hack/lyrics/env/dev/mongoid.yml')

class BaseModel
  include Mongoid::Document
  store_in collection: "Songs", database: "lyrics"
end