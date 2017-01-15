require_relative '../../lib/crudApp/models/base'

class CreateEventTable < ActiveRecord::Migration

  def up
    create_table :event do |t|
      t.string :event_name
    end
    puts 'ran up method for creating new table'
  end

  def down
    drop_table :event
    puts 'ran up method for creating new table'
  end
end

CreateEventTable.migrate(:up)
