const socket = io();
console.log("Main JS file loaded!");
socket.on("connect", () => console.log(`Connected to server [${socket.id}]`));
