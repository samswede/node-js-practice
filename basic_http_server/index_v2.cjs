const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json' // changed to json
    });

    res.end(JSON.stringify({
        id: 1,
        message: 'Hello World!',
        date: new Date()
    }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);

});