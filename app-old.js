const http = require('http');;

http.createServer((req, res) => {
    res.write('Im a sexy server ;)');
    res.end();
})
.listen(8080);

console.log('We listen 8080 port')