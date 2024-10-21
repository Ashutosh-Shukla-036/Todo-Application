import React from 'react';

export const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Todo App</h1>
      <p>This is a simple full-stack MERN Todo application where you can create, update, and manage your daily tasks efficiently.</p>

      <div className='Features'>
        <h2>Features of the Todo App:</h2>
        <ul>
          <li>🔑 User Authentication (Sign Up & Login)</li>
          <li>📝 Add, Edit, and Delete Todos</li>
          <li>🚀 Token-based JWT Authentication</li>
          <li>🔒 Secure and Protected Routes</li>
          <li>📊 Manage your tasks in different states: Pending, In-Progress, and Completed</li>
        </ul>
      </div>
    </div>
  );
}
