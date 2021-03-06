'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const dotenv = require('dotenv/config');


// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// create a user

app.post("/users", async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const newUser = await pool.query("INSERT INTO users (name, email, address) VALUES($1, $2, $3) RETURNING *",
    [name, email, address]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
})

// get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get a user

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

    res.json(users.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
})

//update a user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address } = req.body;
    const updateUser = await pool.query("UPDATE users SET name = $1, email = $2, address = $3 WHERE user_id = $4", [name, email, address, id]
    );

    res.json("User was updated!");
  } catch (error) {
    console.error(error.message);
  }
})

// delete a user

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
    res.json("User was deleted!");
  } catch (error) {
    console.error(error.message);
  }
})

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});