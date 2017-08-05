import requests
import pandas as pd
from bs4 import BeautifulSoup
import datetime
import MySQLdb


user_agent = {'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36'}

allJobLink = []
allJobsAd = []

print("Sterted:")
print(datetime.datetime.now())

for i in range(1,20):
    page = "http://berlinstartupjobs.com/engineering/page/{0}".format(i)
    response  = requests.get(page, headers = user_agent)

    soup = BeautifulSoup(response.content,'html.parser')

#Get all jobs list
    allJobsList = soup.find_all("div", class_="post")

#Get the links to access each job full description

    for job in allJobsList:
        job = job.find("h2", class_="product-listing-h2").find("a")['href']
        allJobLink.append(job)


#Grab full content from the links
    for link in allJobLink:
        response =  requests.get(link, headers = user_agent)
        jobSoup = BeautifulSoup(response.content, 'html.parser')

        allJobsListeach = jobSoup.find_all("div", class_="w-col w-col-8")



#Get company name, Job Title, Small Description and Long Description


        for job in allJobsListeach:
            companyName = job.find('span', class_='title-company-name')
            anchor= companyName.text.split("// ")[1]

            jobTitle = job.find("h1", class_="bsj-h1").get_text()
            justIt = jobTitle.split("//")[0]

            job_small_description_tag = job.find('div', class_= 'paragraph')
            job_small_description = job_small_description_tag.get_text()

            job_long_description_tag = job.find('div', class_= 'white-bg')
            job_long_description = job_long_description_tag.get_text()

#Create the dictionnary

            jobAd = { 'companyName': anchor.encode('utf-8'), 'jobTitle': justIt.encode('utf-8'), 'jobDescriptipnShort': job_small_description.encode('utf-8'),
                    'jobDescriptipnLong': job_long_description.encode('utf-8') }

            allJobsAd.append(jobAd)



#Move content to database
db = MySQLdb.connect(host="localhost",
        user="root",
        passwd="1",
        db="berlin_jobs")


for jobAd in allJobsAd:

    try:
        c = db.cursor()
        qu = "('{0}','{1}','{2}','{3}','{4}','{5}')".format(jobAd['companyName'], jobAd['jobTitle'], jobAd['jobDescriptipnShort'].strip(), datetime.date.today(),'Berlin Startup jobs', jobAd['jobDescriptipnLong'].strip())
        c.execute("INSERT INTO vacancy(company_name, job_title, description, created_date, source, description_long) VALUES {0}".format(qu))
        db.commit()
    except Exception,e:
        print(e)

db.close()
print("        ")
print("Ends")
print(datetime.datetime.now())
