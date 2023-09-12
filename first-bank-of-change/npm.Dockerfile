FROM node:14-alpine

RUN apk update
RUN apk add make g++
RUN apk add python3

RUN #sudo apt-get install -y nodejs g++ build-essential
