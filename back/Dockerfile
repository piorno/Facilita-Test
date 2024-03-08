FROM node:20-alpine as base
WORKDIR /src


# Set the default command to run when a container starts
CMD ["npm", "run", "start"]

# Install app dependencies
COPY back/package.json /src
RUN npm install --loglevel verbose

# Copy your code in the docker image
COPY back/. /src 

RUN npm run build

# RUN npm run dev