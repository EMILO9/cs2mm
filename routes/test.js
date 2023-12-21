module.exports = (app, db, name) => {
  app.get(`/api/${name}`, (req, res) => {
    try {
      res.render("index");
    } catch (error) {
      next(error);
    }
  });
};
