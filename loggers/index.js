module.exports =
  process.env.NODE_ENV !== "production"
    ? require("./devLogger")
    : require("./prodLogger");
