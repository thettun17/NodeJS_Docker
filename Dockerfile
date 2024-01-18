FROM node:18-alpine

RUN apk upgrade --update -q

WORKDIR /usr/src/app
ENV NODE_ENV='dev'

COPY package*.json /usr/src/app

RUN npm install & npm install -g nodemon

COPY . .

CMD ["nodemon" , 'index.js']

