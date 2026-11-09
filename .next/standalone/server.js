const http = require('node:http');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('MLA placeholder\n');
  })
  .listen(Number(process.env.PORT) || 3000, '127.0.0.1');
