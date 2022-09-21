const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName, client } = require('../db');

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

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
 
    try {
        const tags = await getPostsByTagName();
        res.send({
            posts: tags
        });
      
    } catch ({ name, message }) {
      next({ name, message });

    }
  });

module.exports = tagsRouter; 