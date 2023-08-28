# Useing the official Node js image
FROM node:14

# Setting working directory 
WORKDIR /app

# Copying package json and package-lock json files
COPY package*.json ./

# Installing application dependencies
RUN npm install

# Copying all the files to container
COPY . .

# Exposing the port on which application works
EXPOSE 3000

# Starting the application
CMD ["node", "app.js"]
