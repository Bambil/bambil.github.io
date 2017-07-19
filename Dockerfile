FROM node:alpine

MAINTAINER Iman Tabrizian <tabrizian@outlook.com>

ENV NODE_ENV=production
WORKDIR /usr/src/app
CMD npm start

ADD . /usr/src/app
