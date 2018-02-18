package main

import (
  "fmt"
  "github.com/PuerkitoBio/goquery"
  "log"
  "strings"
  "os"
)

func scrapUrls(url string) []string{
  //resp, err := goquer.NewDocument("http://berlinstartupjobs.com/engineering/page/1/")
  doc, err := goquery.NewDocument(url)

  if err != nil {
    log.Fatal(err)
  }

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

  job["Title"] = doc.Find("h1.bsj-h1").Text()
  job["Description"] = doc.Find("div.job-details").Text()
  job["CompanyName"] = strings.Trim(doc.Find("span.title-company-name").Text(), "// ")
  job["PublishedDate"] = doc.Find("div.product-listing-date").Text()
  job["ShortDescription"] = doc.Find("div.paragraph").Text()
  job["Source"] = url

  return job
}

func workers(url <-chan string, s Storage){
    for {
        content := scrapJob(<-url)
        s.Insert(content)
    }
}

func main(){
  targets := make(chan string)
  s := Storage{}
  s.NewStorage(os.Getenv("DB_NAME"), os.Getenv("DB_USER"), os.Getenv("DB_HOST"), os.Getenv("DB_PASS"))

  for j := 0; j <= 10; j++ {
      go workers(targets, s)
  }

  for page := 1; page <= 20; page++{
    url_list := scrapUrls(fmt.Sprintf("http://berlinstartupjobs.com/engineering/page/%d/", page))
    for _, u := range url_list {
        url := strings.Replace(u, "location.href=", "", -1)
        targets <- strings.Trim(url, "'")
    }
  }
  close(targets)
}
