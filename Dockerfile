# STEP 1. 
FROM node:16.14.2 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


# STEP 2
FROM node:16.14.2-alpine

WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start:prod"]