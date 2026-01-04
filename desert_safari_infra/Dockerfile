FROM node:20-alpine AS base

# This Dockerfile is intended to be used as a base or reference for building the web and api applications.
# Adjust commands based on the specific application being built.

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

CMD ["npm", "start"]
