// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();


// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10

});

// Create Express application
const app = express();

app.use(cors());

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Route for creating an item
app.post('/account', (req, res) => {
  console.log(req.body);
  const { name, industry, website, address, notes } = req.body;
  pool.query("INSERT INTO accounts (name, industry, website, address, notes) VALUES (?, ?, ?, ?, ?) ", [name, industry, website, address, notes], (error, results, fields) => {
    if (error) {
      console.error('Error creating item:', error);
      res.status(500).json({ error: 'Error creating item' });
      return;
    }
    res.status(201).json({ ...req.body });
  });
});

// Route for getting all items
app.get('/account', (req, res) => {
  pool.query('SELECT * FROM accounts ORDER BY  created_at DESC ', (error, results, fields) => {
    if (error) {
      console.error('Error retrieving items:', error);
      res.status(500).json({ error: 'Error retrieving items' });
      return;
    }
    res.json(results);
  });
});

// Route for updating an item
app.put('/account/:id', (req, res) => {
  const { id } = req.params;
  const { name, industry, website, address, notes } = req.body;
  pool.query('UPDATE accounts SET name = ?, industry = ?, website = ?, address = ?, notes= ? WHERE id = ?', [name, industry, website, address,notes ,id,],  (error, results, fields) => {
    if (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ error: 'Error updating item' });
      return;
    }
    res.json({ ...req.body});
  });
});

// Route for deleting an item
app.delete('/account/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM items WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Error deleting item' });
      return;
    }
    res.sendStatus(204);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
