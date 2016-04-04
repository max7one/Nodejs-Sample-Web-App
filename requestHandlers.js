var querystring = require("querystring")
var fs=require("fs")


function start(res) {
  console.warn("已处理..开始..的请求");
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<br><br>' +
    '<input type="submit" value="提交" />' +
    '</form>' +
    '</body>' +
    '</html>';

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(body);
  res.end();
}

function upload(res) {
  console.log("已处理..上传..的请求");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("You've sent the text: ")
    // querystring.parse(postData).text
  res.end();
}

exports.start = start
exports.upload = upload
