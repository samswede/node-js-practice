
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


/*

// Lesson 1: Hello World!

app.get('/hello', (req, res) => {
    res.send('This is server 1!');
});

app.get('/hello/json', (req, res) => {
    res.json({
        id: 1,
        message: 'Hello World!',
        date: new Date()
    });
});

app.get('/hello/html', (req, res) => {
    res.send('<p>Hello World!</p>');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

*/

/* */
// Lesson 2: Routing

const friends = [{
        id: 0,
        name: 'Alice'
    },
    {
        id: 1,
        name: 'Bob'
    },
    {
        id: 2,
        name: 'Charlie'
    }
];

app.get('/friends', (req, res) => {
    res.json(friends); // equivalent to res.send(JSON.stringify(friends));
});

// what if we want to get a specific friend?
// we can use query parameters
// e.g. /friends?id=1
app.get('/friends/:friendId', (req, res) => {
    const friendId = parseInt(req.params.friendId);
    const friend = friends[friendId];
    
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error: 'Friend not found!'
        });
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

/* */