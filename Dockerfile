FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# A Node app a 3000-es porton fut
EXPOSE 3000

CMD ["npm", "start"]