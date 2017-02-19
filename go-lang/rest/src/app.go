// app go
package main

import (
  "database/sql"
  "github.com/gorilla/mux"
)

import _ "github.com/go-sql-driver/mysql"

type App struct {
  Router *mux.Router
  DB *sql.DB
}

// func (a *App) Initialize(user, password, dbname string) {}
func (a *App) Run(addr string) {}

func (a *App) Initialize(user, password, dbname string) {
    var err error
    a.DB, err = sql.Open("mysql", "root:1@/gorest")
    if err != nil {
        //log.Fatal(err)
    }

    a.Router = mux.NewRouter()
}