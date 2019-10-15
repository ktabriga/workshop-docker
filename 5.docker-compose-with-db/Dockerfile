FROM node:10-alpine

WORKDIR /app
COPY app.js ./

RUN npm install -g nodemon

VOLUME /app
EXPOSE 3000

CMD nodemon app.js


