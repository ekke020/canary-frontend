FROM node:19.2-alpine as builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM alpine

FROM nginx:stable-alpine as production
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/default.conf && rm -rf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]