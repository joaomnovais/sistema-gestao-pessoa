const app = require('./src/app');

const initDatabase = require('./src/database/initDatabase');

const PORT = 3000;

async function startServer() {
    try {
        await initDatabase();

        app.listen(PORT, () => {

            console.log(
                `Servidor rodando em http://localhost:${PORT}`
            );

        });
    } catch (error) {
        console.error('Erro ao iniciar:', error.message);
        process.exit(1);
    }
}

startServer();


