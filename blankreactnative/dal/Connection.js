import * as SQLite from "expo-sqlite";
let isDbInitialized = false;
const initDatabase = async (db) => {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS Personas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombres TEXT NOT NULL,
            apellidos TEXT NOT NULL,
            edad INTEGER NOT NULL,
            ciudad TEXT NOT NULL,
            fechaNacimiento TEXT NOT NULL
        );
    `);
    isDbInitialized = true;
};
export const getDb = async () => {
    const db = await SQLite.openDatabaseAsync("mydb.db");
    if (!isDbInitialized) {
        await initDatabase(db);
    }
    return db;
};
