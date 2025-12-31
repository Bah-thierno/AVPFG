import { MongoClient } from 'mongodb';

const url = process.env.COSMOS_CONNECTION_STRING;
let client: MongoClient | null = null;

export async function connectToDatabase() {
    if (!client) {
        if (!url) {
            throw new Error("COSMOS_CONNECTION_STRING is not defined");
        }
        client = new MongoClient(url);
        await client.connect();
    }
    return client.db('guinee-propre-db');
}
