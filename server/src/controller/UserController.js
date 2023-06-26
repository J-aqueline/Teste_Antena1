const { 
    getAllFromRepository,
    getByIdFromRepository,
    createFromRepository,
    deleteUserFromRepository,
    updateFromRepository, 
} = require("../repository/UserRepository");

async function getAll()  {
    return await getAllFromRepository();
}

function validateInput(name, email, age) {
    if (name == null || name.trim() == "") {
        throw Error("Nome inválido")
    }
    if ( email == null || email.trim() == "") {
        throw Error("Email inválido")
    }
    if (age == null || age < 0 || age >= 100) {
        throw Error("Idade inválida")
    }
}

async function create(req) {
    const { name, email, age } = req.body;
    
    validateInput(name, email, age);
    return await createFromRepository({
        name,
        email,
        age,
    });
}

async function deleteUser(req) {
    const { id } = req.params;
    return await deleteUserFromRepository(id);
}

async function getById(req) {
    const { id } = req.params;
    return await getByIdFromRepository(id);
}

async function update(req) {
    const { id } = req.params;
    const { name, email, age } = req.body;
    
    validateInput(name, email, age);
    return await updateFromRepository({
        id,
        name,
        email,
        age,
    });
}

module.exports = {
    create,
    getAll,
    getById,
    deleteUser,
    update,
};
