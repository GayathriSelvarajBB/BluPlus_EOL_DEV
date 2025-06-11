FROM node:18.12.1 AS ui-build
WORKDIR /usr/src/app
COPY . ./
RUN npm install && npm run build


FROM nginx:alpine

#!/bin/sh

#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=ui-build /usr/src/app/build/ /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
