FROM node:10.15.3-alpine

RUN mkdir /src

WORKDIR /src

COPY . ./

EXPOSE 8000

CMD [ "yarn", "start" ]
