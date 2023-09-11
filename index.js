const express = require("express");
const loggingMiddleware = require("../btvn/middleware/loggin");
const logRequest = require("../btvn/middleware/logRequest");

const router = require("../btvn/router/index");

const app = express();
const port = 3000;

// Middleware trước router
app.use(loggingMiddleware);
app.use(logRequest);

// Router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
