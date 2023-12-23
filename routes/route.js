module.exports = (app, db, routeName) => {
  app.get(`/${routeName}`, async (req, res, next) => {
    try {
      res.send(`Hello from ${routeName}!`);
    } catch (error) {
      next(error);
    }
  });
};
