module Lyrics
  module API
    class Songs < Grape::API
      version 'v1', using: :header, vendor: 'lyrics'

      resource :songs do
        desc 'Retrive all Songs'
        get :all do

        end

        get do
          begin
            ## retrive all users
            'Nothing yet really!'
          rescue Exception => e
          end
        end
        

        # desc 'Return a status.'
        # params do
        #   requires :user_id, type: Integer, desc: 'User id.'
        # end
        # route_param :user_id do
        #   get do
        #     begin
        #     rescue Exception => e
        #     end
        #   end
        # end

        # desc 'Delete a song'
        #   params do
        #     requires :user_id, type: Integer, desc: 'User id.'
        #   end
        #   delete ':user_id' do
        #     # authenticate!
        #     begin
        #     rescue Exception => e
        #     end
        #   end

        params do
          requires :title, type: String, desc: 'Song title'
          requires :artist, type: String, desc: 'Song artist'
          requires :lyrics, type: String, desc: 'Song lyrics'
          requires :info, type: String, desc: 'Song Information: history, type'
        end
        post do
          song = Lyrics::Service::SongService.new
          begin
            song.new_song(params.artist, params.title, params.lyrics, params.info)
            status 201
          rescue Exception => e
            error! "#{e}", 404
          end
        end
      end
    end
  end
end