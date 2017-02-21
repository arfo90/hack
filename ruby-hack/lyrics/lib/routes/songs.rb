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
          # requires :username, type: String, desc: 'Your status.'
          # requires :name, type: String, desc: 'Your status.'
        end
        post do
          p params
          begin
          rescue Exception => e
            p e
          end
        end
      end
    end
  end
end