FROM node:lts-alpine

WORKDIR /app/frontend

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install --silent

EXPOSE 3000

CMD cd /app/frontend && npm run dev --host