import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

// DAO
import EmailsDAO from './dao/emailsDAO.js';
import UserDAO from './dao/userDAO.js';


async function main() {
    dotenv.config();
    const client = new mongodb.MongoClient(
        process.env.EMAILS_DB_URI
    )
    const port = process.env.PORT || 5000;
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        await EmailsDAO.injectDB(client);
        await UserDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);
