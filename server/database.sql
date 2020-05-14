CREATE DATABASE nearapogee;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  address VARCHAR(255)
)