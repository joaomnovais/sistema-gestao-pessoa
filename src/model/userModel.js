const db = require('../database/connection');

async function createUsersTable() {
    const sql = 'CREATE TABLE IF NOT EXISTS users ( id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100) NOT NULL, email VARCHAR(150) NOT NULL UNIQUE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)';
    
await db.query(sql);

console.log('Tabela users verificada/criada com sucesso');
}

module.exports = {
    createUsersTable
};