const users = require("../data/use");

let userStatistics = [
  { user: "alice", student: 0, teacher: 0, subject: 0 },
  { user: "bob", student: 0, teacher: 0, subject: 0 },
  { user: "charlie", student: 0, teacher: 0, subject: 0 },
];

function logRequest(req, res, next) {
  const { method, url, body, headers } = req;
  const apiKey = req.query.apiKey;

  const user = users.find((u) => u.apiKey === apiKey);
  if (!user) {
    // Trả về lỗi 403 nếu API key không hợp lệ
    return res.status(403).json({ error: "Forbidden" });
  }

  const userStatistic = userStatistics.find(
    (stat) => stat.user === user.username
  );
  if (userStatistic) {
    userStatistic[url.substring(1)]++;
  }
  // Ghi lại thông tin yêu cầu vào hệ thống
  console.log("Request:", {
    method,
    url,
    user: user.username,
  });

  // Chuyển quyền điều khiển cho middleware tiếp theo hoặc kết thúc xử lý yêu cầu
  next();
}
module.exports = logRequest;
