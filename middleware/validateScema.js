module.exports = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body, { abortEarly: false });
  if (error)
    return res
      .status(400)
      .send(
        error.details.map((x) => ({ key: x.context.key, message: x.message }))
      );
  req.body = value;
  next();
};
