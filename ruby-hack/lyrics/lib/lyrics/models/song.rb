require_relative 'base_model.rb'

module Lyrics
  module Model
    class SongModel < BaseModel
      
      field :singer, type: String
      field :albume, type: String
      field :lyrics, type: Array
    end
  end
end
