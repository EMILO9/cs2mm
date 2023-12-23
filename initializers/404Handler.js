module.exports = (app) => {
  app.use((req, res) => {
    res
      .status(404)
      .send({ error: "The endpoint you are trying to access does not exist." });
  });
};
