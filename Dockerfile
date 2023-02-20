FROM node:16-buster-slim


ENV PORT 4321
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY *.js ./
COPY src ./src/
EXPOSE 4321
CMD [ "node", "app.js" ]
