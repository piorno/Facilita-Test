FROM node:20-alpine as base

# WORKDIR /front

# CMD ["npm", "run", "preview"]

# # Install app dependencies
# COPY front/package.json /front
# RUN npm install --loglevel verbose

# RUN npm run build

# # Copy your code in the docker image
# COPY back/. /src 

WORKDIR /app

COPY front/package.json .

RUN npm install

COPY front/. .

RUN npm run build

EXPOSE 3000
EXPOSE 4173
EXPOSE 5173

CMD [ "npm", "run", "preview" ]
