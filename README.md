# Project Name

Welcome to the task management! This project is a full-stack application built with React, Chakra UI, and TypeScript on the client side, and Node.js, Express, and MongoDB on the backend. It utilizes the Concurrently package to run the server and the backend simultaneously.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description
The task manager is a powerful web application that combines the latest technologies to provide an efficient and seamless user experience. It allows you to create tasks, assign them to users across the application,
give the tasks a status and delete them. 

## Features

- Infinite Scroll: I implemented an inifite scroll to load the api response and add the returned tasks to the state of the application.
- MongoDB: implemented a tasks collection with Moongoose, every task created will be store in the database.

## Installation

To run this project locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/frankos333/task-management.git`
2. Navigate to the project directory: `cd project-name`
3. Install the dependencies for the client side:
   - Run `cd client` to move into the client directory.
   - Run `npm install` to install the necessary packages.
4. Install the dependencies for the server side:
   - Return to the project root directory: `cd ..`
   - Run `cd server` to move into the server directory.
   - Run `npm install` to install the necessary packages.

## Usage

To start the application, follow these steps:

1. Navigate to the project root directory.
2. Run `npm run start` to start the server and the backend with the concurrently package.
3. Open your browser and visit `http://localhost:3000` to access the application.

## Dependencies

### Client Side

- React
- Chakra UI
- TypeScript
- Axios
- Concurrently

### Server Side

- Node.js
- Express
- MongoDB
