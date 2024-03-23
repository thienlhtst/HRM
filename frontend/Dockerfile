FROM node:16 as node
WORKDIR /project
RUN npm install -g @angular/cli@16.1.5
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . . 


EXPOSE 4200
CMD [ "npm","start" ]