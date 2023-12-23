module.exports = (app, db, routeName) => {
  app.get(`/${routeName}`, async (req, res, next) => {
    try {
      const listings = db.collection("listingsAndReviews");
      const response = await listings
        .find({}, { projection: { _id: 1, name: 1 } })
        .limit(10)
        .toArray();
      res.send(response);
    } catch (error) {
      next(error);
    }
  });
};
