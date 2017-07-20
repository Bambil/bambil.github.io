FROM node:alpine

MAINTAINER Iman Tabrizian <tabrizian@outlook.com>

ENV HOST=0.0.0.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

ADD . /usr/src/app

RUN npm build

CMD npm start
