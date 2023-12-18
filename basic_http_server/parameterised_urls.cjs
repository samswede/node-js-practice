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

    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (chunk) => {
            const friend = JSON.parse(chunk.toString()); // converts buffer to string to json
            console.log('Request: ', friend);
            friends.push(friend);
            res.end(JSON.stringify(friend));
        });

    } else if (req.method === 'GET' && items[1] === 'friends') { // checks second item in array
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

// example of a POST request:
// curl -X POST -d '{"id": 4, "name": "Eve"}' -H "Content-Type: application/json" http://localhost:3000/friends

/* 

// Paste the following into the console while at the /friends endpoint:
// You should see the following in the terminal here:
// Request:  { id: 4, name: 'Eve' }
// and the following in the console:
// { id: 4, name: 'Eve' }
// and when you refresh the browser, you should see the following:
// [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"},{"id":4,"name":"Eve"}]

// note that eve was added to the end of the array

fetch('http://localhost:3000/friends', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 4,
        name: 'Eve'
    })
}).then(res => res.json()).then(data => console.log(data)); 

*/
