export const JsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

export const Logger = (req, res, next) => {
  console.log("Method: ", req.method, "\nURL: ", req.url);
  next();
};
