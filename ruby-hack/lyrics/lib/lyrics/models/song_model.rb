require_relative 'base_model.rb'

module Lyrics
  module Model
    class SongModel < BaseModel
      field :singer, type: String
      field :title, type: String
      field :lyrics, type: Array

      def save_doc(singer, title, lyrics)
          begin
            self.singer = singer
            self.title = title
            self.lyrics = lyrics
            save
          rescue Exception => e
            return "Error:---> #{e}"
          end
      end
    end
  end
end
