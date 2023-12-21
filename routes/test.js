module.exports = (app, db, name) => {
  app.get(`/api/${name}`, (req, res) => {
    try {
      res.send({ message: `Hello from ${name} route!` })
    } catch (error) {
      next(error);
    }
  });
};
