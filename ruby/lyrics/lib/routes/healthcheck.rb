module Lyrics
  module API
    class Healthcheck < Grape::API
      version 'v1', using: :header, vendor: 'lyrics'

      resource :healthcheck do
        desc 'Is Service Alive?!'
        get do
          'Up and Running....'
        end
      end
    end
  end
end
