FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 1000

ENV PORT=1000


CMD ["npm", "start"]