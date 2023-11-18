const http = require("http");

const host = process.env.host || "localhost";
const port = process.env.port || 5005;

const User = require("./user");

// Callback Function: Design Pattern ? Architecture Pattern ?
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");

  res.writeHead(200);

  const user = new User("John", 30);

  const html =
    "My first server!" +
    user.greeting() +
    JSON.stringify(req.body);

  res.end(html);
};

// ЭТО НЕ PHP
// $user::createUser()

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(
    `Server is running on http://${host}:${port}`
  );
});
