function route(handle, pathname, res, req) {
  console.log("一个请求对于" + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req)
  } else {
    console.log("没有发现对" + pathname + "的请求处理");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not found");
    res.end();
  }
}

exports.route = route
