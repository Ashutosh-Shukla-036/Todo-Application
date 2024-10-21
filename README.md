
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
Todo
├── BackEnd
│   ├── controller         # Contains the application logic (Controllers for handling requests)
│   │   ├── taskController.js    # Controller handling task-related operations (CRUD for todos)
│   │   ├── userController.js    # Controller handling user authentication (signup, login)
│   │
│   ├── db                 # Database configuration (e.g., MongoDB connection)
│   │   ├── db.js               # MongoDB connection setup using Mongoose
│   │
│   ├── middlewares        # Custom middlewares (Authentication, Error handling)
│   │   ├── authMiddleware.js    # Middleware for verifying JWT tokens and protecting routes
│   │   ├── errorMiddleware.js   # Global error handler
│   │
│   ├── models             # Mongoose models for MongoDB
│   │   ├── Task.js             # Task schema and model for todos
│   │   ├── User.js             # User schema and model for authentication
│   │
│   ├── routes             # API route definitions
│   │   ├── taskRoutes.js        # Routes related to todos (CRUD operations)
│   │   ├── userRoutes.js        # Routes related to user authentication (signup, login)
│   │
│   ├── .gitignore         # Specifies files to be ignored by Git (e.g., node_modules, .env)
│   │
│   ├── index.js           # Entry point for the backend (Server setup with Express.js)
│   │   ├── Sets up the Express server
│   │   ├── Connects to MongoDB
│   │   ├── Includes routes and middlewares
│   │
│   ├── package.json       # Backend dependencies and scripts
│   │   ├── express              # Web framework
│   │   ├── mongoose             # MongoDB ORM
│   │   ├── bcryptjs             # For password hashing
│   │   ├── jsonwebtoken         # For handling JWT authentication
│   │   ├── dotenv               # For environment variable management
│
├── FrontEnd  
│   ├── src
│   │   ├── assets              # Contains assets like images, icons, etc.
│   │   │
│   │   ├── components          # React Components for different parts of the app
│   │   │   ├── About.jsx            # About page component
│   │   │   ├── CreateTodo.jsx       # Component to create a new todo
│   │   │   ├── DisplayTodo.jsx      # Component for displaying todos
│   │   │   ├── Home.jsx             # Home page component
│   │   │   ├── Login.jsx            # Login page component
│   │   │   ├── NavBar.jsx           # Navigation bar component
│   │   │   ├── SignUpUser.jsx       # Signup page component
│   │   │   ├── TodoList.jsx         # Component to list all todos
│   │   │   ├── UpdateTodoForm.jsx   # Form to update existing todos
│   │   │
│   │   ├── API_Calls            # API calls to the backend server
│   │   │   ├── AddTodo.jsx          # API call for adding new todo
│   │   │   ├── fetchTodos.jsx       # API call for fetching todos
│   │   │   ├── LogIn.jsx            # API call for logging in a user
│   │   │   ├── RemoveTodo.jsx       # API call for deleting a todo
│   │   │   ├── Signup.jsx           # API call for signing up a user
│   │   │   ├── UpdateTodo.jsx       # API call for updating a todo
│   │   │
│   │   ├── App.js                # Main React component that handles routing and renders pages
│   │   ├── index.js              # Entry point for React (ReactDOM.render to mount the app)
│   │   ├── App.css               # Global CSS styles for the React app
│   │
│   ├── public/
│   │   ├── index.html            # Main HTML template for React app
│   │   ├── manifest.json         # Web app manifest for PWA capabilities
│   │   ├── favicon.ico           # Icon for the app
│   │
│   ├── package.json           # Frontend dependencies and scripts
│   │   ├── react                  # React library
│   │   ├── fetch                  # For making HTTP requests to backend APIs
│   │   ├── react-router-dom       # For handling client-side routing
│   │   ├── jwt-decode             # For decoding JWT tokens on the client side
│   │
│   ├── .gitignore             # Specifies files to be ignored by Git (e.g., node_modules, build files)
│
└── README.md                  # Project documentation for both frontend and backend (main README)

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
