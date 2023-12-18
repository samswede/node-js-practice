function getMessages(req, res) {
    res.json(messages);
};

function postMessage(req, res) {

}

// below is Common JS notation for exporting modules

module.exports = {
    getMessages,
    postMessage
};


// below is ES6 notation for exporting modules
// export default {
//     getMessages,
//     postMessage
// };