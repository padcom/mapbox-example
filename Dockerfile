FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./
COPY clustered-points-server.mjs .
RUN npm ci --production


EXPOSE 9009

CMD [ "node", "clustered-points-server.mjs" ]
