const server = require('http');
const url = require('url');
const port = 3001;

const tempConverter = (temp, from, to) => {
    // var celsius = (fah - 32) * 5/9;
    // return `<strong>${temp.toFixed(2)}</strong>`;
    switch (from) {
        case 'far':
            celsius = (temp - 32) * 5/9;
            break;
            default:
                celsius = temp;
                break;
    }

    switch (to) {
        case 'far':
            // do stuff in a mo'
    }

}

server.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('Hello');
}).listen( port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});