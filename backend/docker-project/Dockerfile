FROM node:20 AS base
WORKDIR /usr/src/app
COPY package* .
RUN npm install

FROM base AS development
COPY . .
CMD ["npm","run","dev"]

FROM base AS production
COPY . .
CMD ["npm","run","start"]
