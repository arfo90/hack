$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))
require 'rubygems'
require 'bundler/setup'

Bundler.require(:default)

module Lyrics

  module Model
    autoload :SongModel, 'lyrics/models/song_model.rb'
  end

  module Service
    autoload :SongService, 'lyrics/services/song_service.rb'
  end

  module API
    autoload :Songs, 'routes/songs'
    autoload :Healthcheck, 'routes/healthcheck'

    class Mount < Grape::API
      mount Lyrics::API::Songs
      mount Lyrics::API::Healthcheck
    end
  end
end