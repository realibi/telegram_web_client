const express = require("express");
const models = require('../Models');
const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    let users = await models.User.find({});
    res.send(users);
});

module.exports = usersRouter;
