# Use the official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
