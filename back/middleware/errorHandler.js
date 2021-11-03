function errorHandler(err, req, res, next) {
  if (err.error === 403) {
    res.status(err.error).json({ message: err.message });
  } else if (err.error === 402) {
    res.status(err.error).json({ message: err.message });
  } else {
    res.status(500).json({ message: err });
  }
}

module.exports = errorHandler;
