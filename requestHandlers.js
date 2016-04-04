var querystring = require("querystring")
var fs = require("fs")
var formidable = require("formidable")
var uuid = require("node-uuid")


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

function upload(res, req) {
  console.log("已处理..上传..的请求");
  var form = new formidable.IncomingForm();
  console.log("正在解析");
  form.parse(req, function(error, fields, files) {
    console.log("解析完成");
    // var extName = /\.[^\.]+/.exex(files.file.name)
    // var ext = Array.isArray(extName) ? extName[0] : '';
    // //重命名,防止文件重复
    // var avatarName = uuid() + ext;
    // //移动的文件目录
    // var newPath = 'upload/img/' + avatarName;
    // fs.renameSync(files.file.path, newPath);
    // fields.newsimg = 'img/' + avatarName
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("接受图片:<br/>");
    res.write("<img src='/show' />");
    res.end();
  });
}

function show(res) {
  console.log("已处理..显示..的请求");
  fs.readFile("./upload/git速查表.png", "binary", function(error, file) {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write(error + "\n");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(file, "binary");
      res.end();
    }
  });
}

exports.start = start
exports.upload = upload
exports.show = show
