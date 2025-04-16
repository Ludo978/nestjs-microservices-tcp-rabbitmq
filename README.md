# NestJS Microservices boilerplate

## Description
This is a boilerplate for building microservices using NestJS. It includes a basic setup for a microservice architecture with RabbitMQ as the message broker. It has a gateway service that takes all incoming requests and routes them to the appropriate microservice using TCP. 
The boilerplate also includes a basic setup for a MongoDB database.
It also includes a basic setup for Docker and Docker Compose to run the microservices in containers in development (with hot-reload) and production environments.

## Getting Started
### Production
To run the microservices, just run the following command:
```bash
docker-compose up
```
This will start all the microservices, the mongoDB database and the RabbitMQ message broker.

### Development
Go to the root folder and then to every microservice folder and run the following command:
```bash
yarn install
```
This will install all the dependencies for the microservice so you can have type checking and intellisense in your IDE.

To start the project, run the following command:
```bash
docker compose -f docker-compose.dev.yml up
```
This will start all the microservices, the mongoDB database and the RabbitMQ message broker with hot-reload.

### URLs
- Gateway: http://localhost:3000
- RabbitMQ: http://localhost:15672 (username: rabbitmq, password: rabbitmq)
- MongoDB: mongodb://localhost:27017
