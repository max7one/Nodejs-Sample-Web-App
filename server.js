var http = require("http")

function start() {
  http.createServer(function(req, res) {
    console.log("请求已接受");
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('hello world')
    res.end()
  }).listen(3000)
  console.log("Server on http://localhost:3000");
}

exports.start = start
