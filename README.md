# Avinav Shop - QA E-Commerce Platform

A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This project was formerly "Dynamic Coding with Amit" and has been rebranded and enhanced as "Dynamic Coding with Avinav".

## Features

- **User Authentication**: Secure login and registration.
- **Product Management**: Browse cameras, trimmers, speakers, and more.
- **Shopping Cart**: Add items, view summary, and proceed to checkout.
- **Responsive Design**: Visuals enhanced with Tailwind CSS.
- **State Management**: Redux Toolkit for efficient state handling.

## Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS, React Router, React Toastify
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens), bcryptjs

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB URI (Atlas or Local)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd avinav-shop
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    TOKEN_SECRET_KEY=your_secret_key
    FRONTEND_URL=http://localhost:3000
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory and add:
    ```env
    REACT_APP_CLOUD_NAME_CLOUDINARY=your_cloudinary_name
    ```

### Running the Application

1.  **Start the Backend:**
    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the Frontend:**
    ```bash
    cd frontend
    npm start
    ```

## Project Structure

- `backend/`: Server-side code (Express, Mongoose models, controllers).
- `frontend/`: Client-side code (React components, Redux slices, Pages).

## Credits

Rebranded and customized from "Dynamic Coding with Amit".
