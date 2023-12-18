const express = require('express');

const messagesController = require('../controllers/messages.controller.js');

const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
});

messagesRouter.get('/', messagesController.getMessages);


module.exports = messagesRouter;