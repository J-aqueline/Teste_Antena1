CREATE DATABASE antena1;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    age INT
);