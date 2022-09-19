const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, client } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("a request is being made to /tags");

    next();
});

tagsRouter.get('/', async(req, res) => {
    const tags = await client.query(`
    SELECT * 
    FROM tags;`);

    res.send({
        tags
    });
});

module.exports = tagsRouter; 