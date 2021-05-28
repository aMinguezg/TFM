FROM node:14

WORKDIR /usr/src/app

RUN npm install

RUN npm install express

RUN npm install graphdb

COPY . .


CMD [ "node", "app.js" ]
