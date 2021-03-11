FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN apk add --no-cache make gcc curl g++ python && \
  npm install && \
  apk del make gcc g++ python


RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli

RUN npm i -g typescript

RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash


#RUN npm rebuild bcrypt --build-from-source

USER node

WORKDIR /home/node/app
RUN chmod +x .docker/entrypoint.sh

EXPOSE 3000
EXPOSE 9229