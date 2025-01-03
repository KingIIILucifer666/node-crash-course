export const NotFound = (req, res) => {
  res.write(JSON.stringify({ message: "Route not found" }));
  res.statusCode = 404;
  res.end();
};
