const pool = require("../db");

async function getAllFromRepository() {
    const allUsers = await pool.query(
        "SELECT * FROM users"
    );
    return allUsers.rows
}

async function createFromRepository(user) {
    const newUser = await pool.query(
        "INSERT INTO users (name, email, age) VALUES ($1,$2,$3) RETURNING *", 
        [user.name, user.email, user.age]
    );
    return newUser.rows[0];
}

async function deleteUserFromRepository(id) {
    await pool.query("DELETE FROM users WHERE id = $1", [
        id
    ]);
    return true;
}

async function updateFromRepository(user) {
    await pool.query(
        "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4",
        [user.name, user.email, user.age, user.id]
    );
    return true;
}

async function getByIdFromRepository(id) {
    const user = await pool.query("SELECT * FROM users WHERE id =$1", [
        id
    ]);
    return user;
}

module.exports = {
    getAllFromRepository,
    createFromRepository,
    deleteUserFromRepository,
    updateFromRepository,
    getByIdFromRepository,
}
