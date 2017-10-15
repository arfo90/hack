package main

import (
  "fmt"
  "github.com/PuerkitoBio/goquery"
  "log"
  "strings"
)

func scrap(url string) []string{
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

func main(){
  urls := scrap("http://berlinstartupjobs.com/engineering/page/1/")

  for _, u := range urls {
    url := strings.Replace(u, "location.href=", "", -1)
    fmt.Printf("%s \n", url)
  }
}
