FROM node:10

WORKDIR /app
COPY app.js ./

RUN npm install -g nodemon

VOLUME /app
EXPOSE 3000

CMD nodemon app.js


