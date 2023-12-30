const validate = require("../middleware/validateScema");
const schema = require("../schemas/registerSchema");
const bcrypt = require("bcrypt");

module.exports = (app, route, routeName) => {
  app.post(`/${routeName}`, validate(schema), async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    res.send({ email, password: hash, created: new Date() });
  });
};
