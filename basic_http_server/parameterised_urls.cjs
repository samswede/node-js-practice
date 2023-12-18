const http = require('http');


const server = http.createServer();


const friends = [{
        id: 1,
        name: 'Alice'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Charlie'
    }
];
// the id is a parameterised endpoint. 


server.on('request', (req, res) => {

    const items = req.url.split('/');
    // e.g. /friends/1 => ['', 'friends', '1']

    if (items[1] === 'friends') { // checks second item in array
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) { // if its 3, then it means there is an id
            const friend = friends.find(friend => friend.id === parseInt(items[2]));
            res.end(JSON.stringify(friend));
        } else {
            // if no specific id is requested, then return all friends
            res.end(JSON.stringify(friends));
        }

    }
});



const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);

});