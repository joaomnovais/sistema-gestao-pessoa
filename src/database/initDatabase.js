const { createUsersTable } = require('../model/userModel');

async function initDatabase() {
    await createUsersTable();

    console.log('Base de dados inicializada com sucesso.');
}

module.exports = initDatabase;