module Lyrics
  module Service
    class SearchService
      def search_by_title(title)
        song = Lyrics::Model::SongModel
        song = song.where(title: title).each do |song|
          p song
        end
        song
      end
    end
  end
end