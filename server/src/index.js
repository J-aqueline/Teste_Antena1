const app = require("./app");

const { 
    create,
    getAll,
    deleteUser,
    getById,
    update,
} = require("./controller/UserController");

app.post("/api/users", async (req, res) => {
    try {
        res.json(await create(req));
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        res.json(await getAll());
    } catch (err) {
        res.json({
            message: err.message
        });
    }
});

app.get("/api/users/:id", async (req, res) => {
    try {
        res.json(await getById(req));
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})

app.put("/api/users/:id", async (req, res) => {
    try {
        await update(req);
        res.json({
            message: "As informações foram atualizadas"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

app.delete("/api/users/:id", async (req, res) => {
    try {
        await deleteUser(req);
        res.json({
            message: "Usuário deletado"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})
