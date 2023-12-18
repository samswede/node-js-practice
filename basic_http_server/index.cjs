const http = require('http');

const server = http.createServer((req, res) => {
    // both the req and res are streams
    // req is a readable stream
    req.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    // res is a writable stream
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello World!');

    // end the response. This is required, otherwise the request will hang.
    // Even if you don't write anything to the response, you still need to end it.
    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
    // why is it not printing the port number?
    // because the string is in single quotes
    // use backticks instead
    // which look like this: `` and not like this: ''. (the key to the right of ?)
});