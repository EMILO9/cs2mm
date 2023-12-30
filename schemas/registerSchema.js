const Joi = require("joi");

module.exports = Joi.object({
  email: Joi.string().email().required().lowercase(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeatPassword: Joi.ref("password"),
});
