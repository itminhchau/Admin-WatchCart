FROM node:18-alpine AS build
#chuẩn bị môi trường node.js, version node14/alpine

WORKDIR /watchsc/admin

COPY . .
RUN npm install
RUN npm run build

# Sử dụng hình ảnh nginx để serve ứng dụng đã build
FROM nginx:1.25.3

# Copy ứng dụng đã build từ layer trước
COPY --from=build /watchsc/admin/build /usr/share/nginx/html

# EXPOSE 8000  # Không cần thiết, vì nginx sẽ lắng nghe trên cổng mặc định 80

CMD ["nginx", "-g", "daemon off;"]

#docker build --tag node-docker .
# docker run -p 8080:8080 -d node-docker