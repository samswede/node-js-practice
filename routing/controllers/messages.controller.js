const path = require('path');


function getMessages(req, res) {
    const filePath = path.join(__dirname, '..', 'public', 'some_image.jpg');
    res.sendFile(filePath); // NEW
};

/*
function postMessage(req, res) {

}
*/
// below is Common JS notation for exporting modules

module.exports = {
    getMessages,
    //postMessage
};


// below is ES6 notation for exporting modules
// export default {
//     getMessages,
//     postMessage
// };