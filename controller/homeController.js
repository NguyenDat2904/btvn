const Users = require("../data/data");

class HomeController {
  // GET
  index(req, res) {
    res.json(Users);
  }
}

module.exports = new HomeController();
