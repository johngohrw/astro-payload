# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the payload-instance directory
COPY payload-instance ./payload-instance

# Change to payload-instance directory
WORKDIR /app/payload-instance

# Install dependencies
RUN npm install

# Expose the port - Render will provide PORT environment variable
EXPOSE 3000

# Run the development server
# Render will inject environment variables at runtime
CMD ["npm", "run", "dev"]