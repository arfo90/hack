require_relative 'lib/lyrics.rb'
#export MONGOID_ENV='env/dev/mongoid.yml'
song = Lyrics::Model::SongModel.new

# song.save_doc('anathem', 'we are here...', ['we are not just a moement in time', 'lalalal'])

song2 = Lyrics::Model::SongModel.new(
  singer: 'EBI',
  albume: 'Avaz',
  lyrics: ['ye ghabari', 'ghose dare']
)

# song2.save

find_song = Lyrics::Model::SongModel.find('58ac8b414d6e3819aa7f523b')
# find_song.find('58ac8b414d6e3819aa7f523b')
p find_song


# field :singer, type: String
# field :albume, type: String
# field :lyrics, type: Array