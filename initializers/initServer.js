module.exports = async (app) =>
  await new Promise((resolve, reject) => {
    app.listen(process.env.PORT, (error) => {
      if (error) reject(error);
      resolve();
    });
  });
