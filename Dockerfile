FROM node:18-alpine

RUN apk upgrade --update -q

WORKDIR /usr/src/app
ENV NODE_ENV='dev'

COPY package*.json /usr/src/app

RUN npm install

COPY . .

CMD ["node" , 'index.js']

