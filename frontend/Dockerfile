FROM node:16.14-alpine3.15 as angular


WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm i --legacy-peer-deps
RUN npm run build

FROM httpd:alpine3.15

COPY --from=angular /usr/local/app/dist/frontend .
