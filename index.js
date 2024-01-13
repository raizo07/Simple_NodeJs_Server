const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Gabriel Agada");
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});