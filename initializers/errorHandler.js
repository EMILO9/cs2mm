module.exports = (app) => {
  app.use((err, req, res, next) => {
    res.status(500).json({
      error: "An unexpected error has occurred. Please try again later.",
    });
  });
};
