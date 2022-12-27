FROM node:alpine
WORKDIR /Backend
COPY package*.json yarn.lock   ./
RUN yarn
COPY . .
EXPOSE 4000
CMD ["npm", "run","dev"]