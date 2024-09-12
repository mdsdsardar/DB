const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// POST route to insert a value into the database
router.post('/value', (req, res) => {
    const { key, value } = req.body;
    const sql = 'INSERT INTO mytable (`key`, `value`) VALUES (?, ?)';

    connection.query(sql, [key, value], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        res.send('Data inserted successfully');
    });
});

// GET route to retrieve all values from the database
router.get('/values', (req, res) => {
    const sql = 'SELECT * FROM mytable';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving data:', err);
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});

module.exports = router;

