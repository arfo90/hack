package main

import (
  "fmt"
  "github.com/PuerkitoBio/goquery"
  "log"
  "strings"
  "os"

  "database/sql"
  _ "github.com/go-sql-driver/mysql"
)

func scrapUrls(url string) []string{
  //resp, err := goquer.NewDocument("http://berlinstartupjobs.com/engineering/page/1/")
  doc, err := goquery.NewDocument(url)

  if err != nil {
    log.Fatal(err)
  }

  fmt.Printf("Starting scrapping")
  var urls []string

  // Find the review items
  doc.Find("div").Each(func(i int, s *goquery.Selection) {
    // For each item found, get the band and title
    str, exists := s.Attr("onclick")
    if (exists){
     urls = append(urls, str)
    }
  })
  return urls
}

func scrapJob(url string) map[string]string{
  job := make(map[string]string)
  doc, err := goquery.NewDocument(url)

  if err != nil {
    log.Fatal(err)
  }

  fmt.Printf("Starting scrapping job ads...")

  job["Title"] = doc.Find("h1.bsj-h1").Text()
  job["Description"] = doc.Find("div.job-details").Text()
  job["Details"] = doc.Find("div.w-richtext").Text()

  return job
}

func dbConnect() *sql.DB{
  connectionString := fmt.Sprintf("%s:%s@/%s", os.Getenv("DB_USERNAME"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_DB_NAME"))
  db, err := sql.Open("mysql", connectionString)

  if err != nil {
    log.Fatal(err)
  }
  defer db.Close()

  return db
}

func insert(sqlDb *sql.DB, job map[string]string){
  db := sqlDb
  _, err := db.Prepare("")
  if err != nil {
    log.Fatal(err)
  }
}

func main(){
  urls := scrapUrls("http://berlinstartupjobs.com/engineering/page/1/")
  db := dbConnect()

  for _, u := range urls {
    url := strings.Replace(u, "location.href=", "", -1)
    job := scrapJob(strings.Trim(url, "'"))
    fmt.Printf("%s \n", job["Title"])
    fmt.Printf("%s \n", job["Description"])
    fmt.Printf("%s \n", job["Details"])
    insert(db, job)
    break
  }
}
