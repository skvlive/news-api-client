FROM node:14.6.0 as build-statge

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.17.0-alpine
COPY --from=build-statge /usr/src/app/dist/movie-db-client /usr/share/nginx/html
