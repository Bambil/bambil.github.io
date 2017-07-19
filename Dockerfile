FROM node:alpine

MAINTAINER Iman Tabrizian <tabrizian@outlook.com>

ENV NODE_ENV=production
ENV HOST=0.0.0.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

ADD . /usr/src/app

RUN npm run build

CMD npm start
