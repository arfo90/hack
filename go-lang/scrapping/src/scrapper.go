package main

import (
  "fmt"
  "github.com/PuerkitoBio/goquery"
  "log"
  "strings"

  _"database/sql"
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

func scrap_job(url string) map[string]string{
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

func main(){
  urls := scrapUrls("http://berlinstartupjobs.com/engineering/page/1/")

  for _, u := range urls {
    url := strings.Replace(u, "location.href=", "", -1)
    job := scrap_job(strings.Trim(url, "'"))
    fmt.Printf("%s \n", job["Title"])
    fmt.Printf("%s \n", job["Description"])
    fmt.Printf("%s \n", job["Details"])
    break
  }
}
