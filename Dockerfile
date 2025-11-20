# Dockerfile - build and serve a Node/React app using nginx
FROM node:18 AS builder
WORKDIR /app
COPY . .
# If package.json exists, build; otherwise assume static site in 'public' or root
RUN if [ -f package.json ]; then npm install --legacy-peer-deps && npm run build || true; fi

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
