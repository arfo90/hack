$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))
require 'rubygems'
require 'bundler/setup'

Bundler.require(:default)

module Lyrics

  module Model
    autoload :LyricsModel, 'lyrics/models/lyrics.rb'
  end
  
end