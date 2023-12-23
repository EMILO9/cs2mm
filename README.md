## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have access to a MongoDB database, and you have your MongoDB URI. If you don't have a MongoDB database set up, you can create a free database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Setup & Installation

Clone the project

```bash
  git clone https://github.com/EMILO9/cs2mm.git
```

Go to the project directory

```bash
  cd cs2mm
```

Install dependencies

```bash
  npm install
```

Set up environment variables

Create a `.env` file in the root directory of the project and add the following:

```bash
  NODE_ENV=development
  PORT=4000
  MONGO_URI=<your-mongodb-uri>
```

Start the server

```bash
  npm start
```

```bash
  npm run dev
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
