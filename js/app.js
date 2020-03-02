const server = require('http');
const url = require('url');
const port = 3001;

const tempConverter = (temp, from, to) => {
    var celsius = (fah - 32) * 5/9;
    return celsius;

}

server.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('Hello');
}).listen( port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});