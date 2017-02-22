module Lyrics
  module Service
    class SongService
      def new_song(singer, title, lyrics)
        song = Lyrics::Model::SongModel.new
        song.save_doc(singer, title, lyrics)
      end
      
      def update_song
      end
      
      def delete_song
      end
    end
  end
end