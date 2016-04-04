var http = require("http")
var url = require("url")

function start(route, handle) {
  http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname
    console.log("");
    console.log("对" + pathname + "的请求已接受");
    route(handle, pathname, res, req)
  }).listen(3000)
  console.log("Server on http://localhost:3000");
}

exports.start = start
