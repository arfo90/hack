require_relative '../../lib/crudApp/models/base'

class DropEventTable < ActiveRecord::Migration
  def up
    drop_table :event
    puts 'ran up method for creating new table'
  end

  def down
    ###
  end
end

DropEventTable.migrate(:up)
