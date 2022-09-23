import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
let db;

export async function createConnection() {
    const file = join(__dirname, '../db.json');
    const adapter = new JSONFile(file);
    db = new Low(adapter);

    await db.read();

    db.data ||= { tasks: [] };

    await db.write();
}

export const getConnection = () => db;
export const port = 3000;