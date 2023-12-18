
const express = require('express');



// NEW. Import the router
const friendsRouter = require('./routes/friends.router.js');
//const messagesRouter = require('./routes/messages.router.js');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());

/* 
// Old way
app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);
// ------------------------------
*/
// New Way
app.use('/friends', friendsRouter); // mount the router


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});

/* */
