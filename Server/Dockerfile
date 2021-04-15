FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)


RUN npm install

RUN npm install express
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install body-parser -s

RUN npm install mongoose -s

RUN npm install kafka-node -s

RUN npm install graphdb -s

# Bundle app source
COPY . .


CMD [ "node", "app.js" ]
