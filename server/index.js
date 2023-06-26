const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json()); //req.body

//ROTAS

// create
app.post("/api/users", async(req,res) => {
    try {
        const {name, email, age} = req.body;
        const newUser = await pool.query("INSERT INTO users (name, email, age) VALUES ($1,$2,$3) RETURNING *",
        [name, email, age]);

        res.json(newUser.rows[0]); 
    } catch(err) {
        console.error(err.message);  
    }
});
//get all
app.get("/api/users", async(req,res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message);
    }
});

//get byId
app.get("/api/users/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id =$1", [
            id
        ]);

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message); 
    }
})

//delete
app.delete("/api/users/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
            id
        ]);
        res.json("Usuário deletado.");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Servidor iniciado na porta 5000");
});