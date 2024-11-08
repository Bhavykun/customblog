# Custom Blogging Platform

Welcome to the Custom Blogging Platform! This project is a simple yet powerful blogging platform built from scratch using a custom-made API for data management, Express.js for the server, and EJS for the frontend templating.

## Features

- **Create, Read, Update, Delete (CRUD) Operations:** Users can create, read, update, and delete blog posts.
- **Rich Text Editing:** A user-friendly rich text editor allows bloggers to compose their posts with ease.
- **Responsive Design:** The platform is responsive, ensuring a seamless experience across various devices.
- **API Integration:** Utilizes a custom-made API for handling data storage and retrieval.

## Technologies Used

- **Backend:**
  - Express.js: A fast, unopinionated, minimalist web framework for Node.js used to build the server-side logic.
  - Custom API: A custom-made API built using Express.js to handle data management for the blogging platform.
  - PostgreSQL: SQL database to store all the posts created by user. All the CRUD operations can be done by the user.

- **Frontend:(Multiple frontends)**
  - EJS (Embedded JavaScript): A simple templating language that lets you generate HTML markup with plain JavaScript used for rendering dynamic content on the client-side.
  - React.js: Popular frontend library that lets us make the frontends alot more easier to make SPAs. Which handles routes using react-router-dom and makes the API requests with Axios.


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository

2. Navigate to the project directory:

```bash
cd Blog
```

3. Install dependencies:

```bash
npm install
```

4. Start the server and split the terminal and run the API.js:
  - Using EJS as frontend

```bash
node server.js
node API.js
```
  - Using React.js as frontend
```bash
node server.js
npm run dev
```
Split the terminal and run both commands.

5.Open your web browser and navigate to http://localhost:3000 to view the blogging platform. (EJS) or http://localhost:5173 to view the platform (React.js)
