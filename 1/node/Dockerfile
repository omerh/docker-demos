# Official nodejs image
#FROM node:7

FROM naturalintelligence/ubuntu-nodejs:v7.2.0

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

#Can be with --production
RUN npm install express 
USER nobody
CMD [ "node" , "app.js" ]