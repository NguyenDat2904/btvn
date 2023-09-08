const Users = require("../data/data");

class HomeController {
  // GET
  index(req, res) {
    res.json(Users);
  }

  //   GET /:id
  detail(req, res) {
    const param = req.params.id;
    const filterId = Users.filter((user) => user.id == param);
    res.json(filterId);
  }
  //   GET /role
  role(req, res) {
    const filterRole = Users.filter(
      (user) => user.role == 2 && user.info.phone !== ""
    );
    res.json(filterRole);
  }
  //   GET /status
  status(req, res) {
    const filterStatus = Users.filter((user) => user.status == "active");
    res.json(filterStatus);
  }
}

module.exports = new HomeController();
