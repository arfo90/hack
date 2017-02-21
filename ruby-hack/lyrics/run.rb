require_relative 'lib/lyrics.rb'
#export MONGOID_ENV='env/dev/mongoid.yml'
song = Lyrics::Model::SongModel.new

song.save_doc('anathem', 'we are here...', ['we are not just a moement in time', 'lalalal'])