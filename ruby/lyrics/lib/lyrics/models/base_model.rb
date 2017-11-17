require 'mongoid'
Mongoid.load!(File.expand_path('./env/dev/mongoid.yml'), :development)

class BaseModel
  include Mongoid::Document
  store_in collection: "Songs", database: "lyrics"
end