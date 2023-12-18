
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


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

// custom middleware to log time to perform request.
// note that its on the top of the stack, so it will be called
// before any other middleware.
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

// Post requests

// We will use express middleware to parse the body of the request
// and add it to req.body
app.use(express.json());

app.post('/friends', (req, res) => {
    //validation
    if (!req.body.name) {
        return res.status(400).json({ // IMPORTANT: must use 'return' here
            error: 'Missing friend name!'
        });
    }

    const newFriend = {
        id: friends.length, // assume ids are sequential
        name: req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);
});


app.get('/friends', (req, res) => {
    res.json(friends); 
});


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
