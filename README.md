# Chat Application

A real-time chat application where users can sign up, log in, and chat with others. This application uses a modern tech stack to provide a seamless user experience with real-time communication features.

## Features

- **User Authentication**: Secure login and signup using username and password.
- **Real-Time Messaging**: Chat with other users in real-time using Socket.IO.
- **Modern UI**: Built with React, Tailwind CSS, and DaisyUI for a responsive and visually appealing frontend.
- **State Management**: Zustand is used for efficient and lightweight state management.
- **Backend**: Node.js, Express, and MongoDB for a scalable and robust backend.
- **Frontend Build Tools**: Vite for fast development and optimized builds.

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- DaisyUI
- Socket.IO Client
- React Router DOM
- Zustand

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- bcryptjs for password hashing
- jsonwebtoken for secure authentication
- dotenv for environment variable management

---

## Getting Started

### Prerequisites

- Node.js installed on your system.
- MongoDB running locally or on a cloud service.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/chat-app.git
   cd chat-app
    ```
2.Install Backend Dependencies:
```bash
npm install
```
3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```
4. Configure Environment Variables:

Create a .env file in the root.
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```
5. Start the application
- Backend
```bash
npm run server
```
- Frontend
```bash
npm run dev
```
