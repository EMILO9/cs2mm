module.exports = (app, db) => {
  app.get("/", (req, res) => {
    try {
      res.send("Hello World!");
    } catch (error) {
      next(error);
    }
  });
};
