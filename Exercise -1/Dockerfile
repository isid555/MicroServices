# Use the official Nginx image as the base
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /etc/nginx

# Copy the Nginx configuration file from the host to the container
COPY /S/eGov Project/MicroServies/Exercise -1/nginx.conf /etc/nginx/conf.d/default.conf/

# Expose the port that Nginx will listen on
EXPOSE 8080

# Start the Nginx service
CMD ["nginx", "-g", "daemon off;"]
