module.exports = app => {
  app.use((req, res) => {
    if (req.path.startsWith("/api/")) {
      res.status(404).send({ error: "API not found." });
    } else {
      res.render("404");
    }
  });
};
