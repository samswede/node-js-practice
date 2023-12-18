
const express = require('express');

// We import the controllers
const friendsController = require('./controllers/friends.controller.js');
const messagesController = require('./controllers/messages.controller.js');


const app = express();

const PORT = process.env.PORT || 3000;

/*
// The old way of doing things was to have this here.
// But with MVC, we move this part to the models.

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

*/

app.use(express.json());

// notice how much cleaner this is than the previous version!!!
app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

/* */
