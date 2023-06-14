FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "dev"]