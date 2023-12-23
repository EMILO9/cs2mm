const mongoClient = require("mongodb").MongoClient;
const connect = async () => {
  const errors = ["MongoNetworkError", "MongoTimeoutError"];
  const maxRetries = 5;
  let retries = 0;
  let delay = 5000;
  while (retries < maxRetries) {
    try {
      const client = await mongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      return db;
    } catch (error) {
      if (!errors.includes(error.name)) throw error;
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};
module.exports = connect;
