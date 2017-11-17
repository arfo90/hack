FROM ruby:2.4

ADD . src

WORKDIR src

RUN gem update --system

RUN bundle install

EXPOSE 8090

CMD rackup -p 8090
