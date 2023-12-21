const socketIO = require("socket.io");
module.exports = (server, db) => {
  const io = socketIO(server);
  io.on("connection", socket => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
