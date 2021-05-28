FROM node:14

WORKDIR /usr/src/app

RUN npm install

RUN npm install express

RUN npm install kafka-node -s

COPY . .


CMD [ "node", "app.js" ]
