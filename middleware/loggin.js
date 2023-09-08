const fs = require("fs");

function loggingMiddleware(req, res, next) {
  const method = req.method;
  const date = new Date().toISOString().split("T")[0];
  const logMessage = `${method} -> ${date}\n`;

  fs.appendFile("logging.txt", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  next();
}

module.exports = loggingMiddleware;
