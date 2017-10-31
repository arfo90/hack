package main

import (
  "fmt"
  "github.com/PuerkitoBio/goquery"
  "log"
  "strings"
  "os"
  "time"

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
  job["CompanyName"] = strings.Trim(doc.Find("span.title-company-name").Text(), "// ")
  job["PublishedDate"] = doc.Find("div.product-listing-date").Text()
  job["ShortDescription"] = doc.Find("div.paragraph").Text()

  return job
}

func dbConnect() *sql.DB{
  connectionString := fmt.Sprintf("%s:%s@/%s", os.Getenv("DB_USERNAME"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_DB_NAME"))
  db, err := sql.Open("mysql", connectionString)

  if err != nil {
    log.Fatal(err)
  }

  return db
}

func insert(sqlDb *sql.DB, job map[string]string){
  db := sqlDb
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
  _, err = stmt.Exec(job["CompanyName"], job["Title"], job["ShortDescription"], time.Now(), "BerlinStartupJobs", job["Description"])
  if err != nil {
    log.Fatal(err)
  }
  err = tx.Commit()
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
    /*
    fmt.Printf("\n -- %s \n", job["Title"])
    fmt.Printf("\n -- %s \n", job["Description"])
    fmt.Printf("\n -- %s \n", job["CompanyName"])
    fmt.Printf("\n -- %s \n", job["ListingPitch"])
    fmt.Printf("\n -- %s \n", job["ShortDescription"])
    */
    insert(db, job)
    break
  }
}
