package main

import "os"

func main() {
    a := App{}
    a.Initialize(
      os.Getenv("APP_DB_USERNAME"),
      os.Getenv("APP_DB_password"),
      os.Getenv("APP_DB_name"))

      a.Run(":8080")
}
