#alap image
FROM node:22-alpine
#Munka könyvtár kiejelölés
WORKDIR /usr/src/app
#josn másolás
COPY package*.json ./
#függőség telepítés
RUN npm install --omit=dev
#kontérbe másolás
COPY . .

# A Node app port: 3000
EXPOSE 3000
#start parancs
CMD ["npm", "start"]