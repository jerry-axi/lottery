const http = require('http');
const fs = require('fs');
const path = require('path');

const s = http.createServer((req, res) => {
  const f = path.join(__dirname, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(fs.readFileSync(f));
});

s.listen(8899, () => console.log('Server running at http://localhost:8899'));
