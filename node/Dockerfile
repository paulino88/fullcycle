FROM node:15 AS builder

WORKDIR /usr/src/app

RUN apt update -y && \
    apt install -y wget

ENV VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$VERSION/dockerize-alpine-linux-amd64-$VERSION.tar.gz \
    && tar -C . -xzvf dockerize-alpine-linux-amd64-$VERSION.tar.gz \
    && rm -f dockerize-alpine-linux-amd64-$VERSION.tar.gz

COPY . .

RUN npm init -y && \
    npm install express --save && \
    npm install express-flash --save && \
    npm install express-session --save && \
    npm install ejs --save && \
    npm install mysql --save

RUN rm -f package*.json

# ----------- MultiStage Build ----------- #

FROM node:current-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

RUN mv /usr/src/app/dockerize /usr/local/bin/

EXPOSE 3000

CMD ["node", "index.js"]