const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Erreur serveur" });
};

export default errorHandler;
