FROM node:18

# RUN mkdir /api
WORKDIR /ro-api

COPY . .


CMD [ "node", "bin/www" ]
