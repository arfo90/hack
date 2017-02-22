module Lyrics
  module Service
    class SongService
      def insert_song(singer, title, lyrics)
        song = Lyrics::Model::Song.new
        song.save_doc(singer, title, lyrics)
      end
      
      def update_song
      end
      
      def delete_song
      end
    end
  end
end