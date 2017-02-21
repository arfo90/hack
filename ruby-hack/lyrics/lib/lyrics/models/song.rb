require_relative 'base_model.rb'

module Lyrics
  module Model
    class SongModel < BaseModel
      field :singer, type: String
      field :albume, type: String
      field :lyrics, type: Array

      def save_doc(singer, albume, lyrics)
          self.singer = singer
          self.albume = albume
          self.lyrics = lyrics
          save
      end
    end
  end
end
