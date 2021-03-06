const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "item";`
  pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {  
  let queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`;
  pool.query(queryText, [req.body.description, req.body.url, req.body.user_id])
  .then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('ERROR IN ADD ITEM POST', error);
    res.sendStatus(500);
  })
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  let queryText = `DELETE FROM "item" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((error => {
    console.log('Unable to delete item:', error);
    res.sendStatus(500);
  }))
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
