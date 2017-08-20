package main

import (
  "database/sql"
  "errors"
)

type product struct {
  ID    int     `json:"iD"`
  Name  string  `json:"name"`
  Price float64 `json:"price"`
}

func (p *product) getProduct(db *sql.DB) error{
  return errors.New("Not implemented")
}

func (p *product) updateProduct(db *sql.DB) error{
  return errors.New("Not implemented")
}

func (p *product) deleteProduct(db *sql.DB) error{
  return errors.New("Not implemented")
}

func (p *product) createProduct(db *sql.DB) error{
  return errors.New("Not implemented")
}

func getProduct(db *sql.DB, start, count int) ([]product, error){
  return nil, errors.New("Not implemented")
}
