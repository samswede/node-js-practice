// import models
const friends = require('../models/friends.model.js');

function getFriends(req, res) {
    res.json(friends); 
    
};

function getFriend(req, res) {
    const friendId = parseInt(req.params.friendId);
    const friend = friends[friendId];
    
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error: 'Friend not found!'
        });
    }
}

function postFriend(req, res) {
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
}

// below is Common JS notation for exporting modules

module.exports = {
    getFriends,
    getFriend,
    postFriend
};


// below is ES6 notation for exporting modules
// export default {
//     getMessages,
//     postMessage
// };