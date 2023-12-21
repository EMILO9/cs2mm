"
This is a Node.js application that uses Express.js for server-side logic, MongoDB for database, and Socket.IO for real-time communication. The application is structured in a modular way, separating concerns into different modules such as initializers, loggers, routes, and views.

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB instance

### Setup & Installation

1. **Clone the repository**
   \```sh
   git clone <repository-url>
   \```

2. **Install the dependencies**
   \```sh
   npm install
   \```

3. **Set up environment variables**
   Create a `.env` file in the root directory of the project and add the following:
   \```sh
   NODE_ENV=development
   PORT=4000
   MONGO_URI=<your-mongodb-uri>
   \```

4. **Start the server**
   \```sh
   npm start
   \```

## Built With

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.IO](https://socket.io/)
