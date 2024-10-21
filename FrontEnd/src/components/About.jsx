import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About This Project</h1>
      <p>
        This is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) Todo Application built to 
        help users manage their daily tasks efficiently. It allows users to create, read, update, and 
        delete tasks, along with user authentication for a personalized experience. The app also employs 
        token-based authentication to ensure data security.
      </p>
      
      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>User Authentication:</strong> 
          New users can sign up to create an account, and existing users can log in to manage their personal todos.
        </li>
        <li>
          <strong>Create, Read, Update, Delete (CRUD) Functionality:</strong> 
          Users can easily manage their tasks, track their progress, and mark tasks as complete or delete them when no longer needed.
        </li>
        <li>
          <strong>Protected Routes:</strong> 
          Access to the Todo page is restricted to authenticated users only. Unauthorized users are prompted to sign up or log in.
        </li>
        <li>
          <strong>Real-Time Updates:</strong> 
          All data interactions are seamless, with automatic updates to the task list upon changes.
        </li>
        <li>
          <strong>Responsive Design:</strong> 
          The frontend is designed with responsiveness in mind, ensuring a great user experience across devices.
        </li>
      </ul>

      <h2>Technology Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> Built using <strong>React.js</strong> with hooks for state management, 
          dynamic rendering, and React Router for navigation between pages.
        </li>
        <li>
          <strong>Backend:</strong> The server is powered by <strong>Node.js</strong> and <strong>Express.js</strong>, 
          providing a robust API for handling requests from the frontend and managing user data.
        </li>
        <li>
          <strong>Database:</strong> We use <strong>MongoDB</strong> as our database to store user information and todos. 
          It’s efficient and scales well with large datasets.
        </li>
        <li>
          <strong>Authentication:</strong> JWT (JSON Web Token) is used for secure token-based authentication, allowing only 
          authorized users to access and manipulate their todos.
        </li>
        <li>
          <strong>Validation:</strong> We implemented <strong>Zod</strong> in the backend to validate user input for safety 
          and consistency.
        </li>
      </ul>

      <h2>How It Works</h2>
      <p>
        Upon landing on the website, users are greeted with a Home Page and can navigate to other pages like About, Login, 
        and Signup. Once users sign up or log in, they are granted access to their personalized Todo dashboard, 
        where they can manage their tasks. If an unauthenticated user attempts to access protected routes, 
        they are redirected to the login page.
      </p>

      <h2>Future Enhancements</h2>
      <ul>
        <li>Adding OAuth integration for third-party logins like Google and Facebook.</li>
        <li>Implementing drag-and-drop task sorting for better user experience.</li>
        <li>Improving error handling to provide better user feedback on failures.</li>
        <li>Building a dark mode for a more accessible and user-friendly interface.</li>
      </ul>

      <h2>GitHub Repository</h2>
      <p>
        Feel free to explore the full codebase of this project and contribute to it. You can find the repository here: 
        <a href="https://github.com/Ashutosh-Shukla-036/Todo-Application" target="_blank" rel="noopener noreferrer">GitHub Repo</a>.
      </p>
    </div>
  );
};

export default About;
