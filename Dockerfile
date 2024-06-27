# Name the node stage "builder"
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy all files from current directory to working dir in image
COPY .env .
RUN cat .env
COPY . .

# Install node modules and build assets
RUN npm install && npm build
RUN ls /
# Nginx stage for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/dist .

# nginx config to work on port 3002
RUN echo ' \
server { \
  listen 3002; \
  server_name localhost; \
  \
  location / { \
    root /usr/share/nginx/html; \
    index index.html; \
    try_files $uri $uri/ /index.html; \
  } \
} \
' > /etc/nginx/conf.d/default.conf

# Expose port 3002 to the outside world
EXPOSE 3002

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
