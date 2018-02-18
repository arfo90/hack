package main

import(
  "log"
  "fmt"
  "time"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
)

type Storage struct{
    DB    *sql.DB
}

func (s *Storage) NewStorage(db_name string, db_username string, db_host string, db_password string){
  connectionString := fmt.Sprintf("%s:%s@tcp(%s)/%s", db_username, db_password, db_host, db_name)
  var err error
  s.DB, err = sql.Open("mysql", connectionString)

  if err != nil {
    log.Fatal(err)
  }
}

func (s *Storage) Insert(job map[string]string){
  db := s.DB
  tx, err := db.Begin()
  if err != nil {
    log.Fatal(err)
  }
  defer tx.Rollback()
  stmt, err := tx.Prepare("INSERT INTO vacancy(company_name,job_title,description,created_date,source,description_long) VALUES (?,?,?,?,?,?)")
  defer stmt.Close()
  if err != nil {
    log.Fatal(err)
  }
  _, err = stmt.Exec(job["CompanyName"], job["Title"], job["ShortDescription"], time.Now(), job["Source"], job["Description"])
  if err != nil {
    log.Fatal(err)
  }
  err = tx.Commit()
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(".")
}
