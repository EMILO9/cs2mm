module.exports = (app, db, name) => {
  app.get("/", (req, res) => {
    try {
      res.render("index");
    } catch (error) {
      next(error);
    }
  });
};
