FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Run server.js when the container launches
CMD ["node", "server.js"]
