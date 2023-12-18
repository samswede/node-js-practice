const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/hello') {

        // ================================== //
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        // ---------------------------------- //
        // Equivalent to:
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        // ================================== //

        res.end(JSON.stringify({
            id: 1,
            message: 'Hello World!',
            date: new Date()
        }));
    }
    
    else if (req.method === 'GET' && req.url === '/bye') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            id: 1,
            message: 'Bye World!',
            date: new Date()
        }));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);

});