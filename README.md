
# Todo Application

## Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) application. The backend is built using Node.js and Express.js to provide a RESTful API, with MongoDB as the database. The frontend is built using React, providing a responsive and dynamic user interface.

## Features

- User Authentication (JWT-based)
- CRUD operations for managing resources
- Frontend built with React (Hooks, Context API, etc.)
- Backend API built with Express
- MongoDB database with Mongoose models
- Middleware for security, logging, and validation
- Environment variable management for secure configurations
- Integrated React Router for frontend navigation

---

## Project Structure

```bash
├── BackEnd
│   ├── controller         # Contains the application logic (Controllers for handling requests)
│   ├── db                 # Database configuration (e.g., MongoDB connection)
│   ├── middlewares        # Custom middlewares (Authentication, Error handling)
│   ├── models             # Mongoose models for MongoDB
│   ├── routes             # API route definitions
│   ├── .env               # Environment variables (Not recommended to commit this file)
│   ├── .gitignore         # Specifies files to be ignored by Git
│   ├── index.js           # Entry point for the backend (Server setup)
│   ├── package.json       # Backend dependencies and scripts
├── FrontEnd  
└── README.md              # Project documentation
```

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (MongoDB Atlas for cloud)
- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/) 

### Clone the repository

```bash
git clone https://github.com/Ashutosh-Shukla-036/Todo-Application.git
cd Todo-Application
```

### Backend Setup

1. Navigate to the `BackEnd` folder:
   ```bash
   cd BackEnd
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `BackEnd` folder and add the following variables:
   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://your-db-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Run the backend server:
   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `FrontEnd` folder:
   ```bash
   cd FrontEnd
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The frontend should now be running on `http://localhost:3000`.

---

## Usage

1. Make sure MongoDB is running (connected to MongoDB Atlas).
2. Run both the backend and frontend as described in the installation steps.
3. Access the application by visiting `http://localhost:3000` in your browser.

---

## API Endpoints

### Authentication

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user

### CRUD Operations (Example: Todos)

- `GET /task` - Get all Todos
- `POST /task` - Create a new Todo
- `PUT /task/:taskId` - Update a specific Todo by ID
- `DELETE /items/:id` - Delete a specific Todo by ID

---

## Technologies Used

### Backend

- **Node.js** - JavaScript runtime for building fast and scalable applications.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database for storing data.
- **Mongoose** - ODM for MongoDB.
- **JWT** - JSON Web Token for authentication.

### Frontend

---

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the `BackEnd` folder:

```
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
