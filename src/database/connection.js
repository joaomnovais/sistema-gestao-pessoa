//Database define: como conversar com o MySQL?

require('dotenv').config();

const mysql = require('mysql');

const  db = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 3306),
    waitForConnections: true,
    connectionLimit: 10
});

db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error.message);
        return;
    }

    console.log('MySQL conectado com sucesso!');
});

module.exports = db;