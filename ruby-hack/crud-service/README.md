# Sample Ruby lightweight crud server


Follow following to run it:

make sure you have mysql installed, and then you can confige it base on your
mysql user config in lib/crudApp/models/base.rb

```sh
$ bundle install
$ sudo rackup
```

For now you only call simple get as below
  get localhost:port/user

TODO:
  - Databse migraton script (active record) [x]
  - Validating rest payload and map it to active record [X]
  - Exception handling and logging [X]
  - project re-struct (having services and DDD style) [X]
