require_relative 'base_model.rb'

module Lyrics
  module Model
    class SongModel < BaseModel
      field :artist, type: String
      field :title, type: String
      field :lyrics, type: String
      field :info, type: String

      def save_doc(artist, title, lyrics, info='')
          begin
            self.artist = artist
            self.title = title
            self.lyrics = lyrics
            self.info = info
            save
          rescue Exception => e
            return "Error:---> #{e}"
          end
      end
    end
  end
end
