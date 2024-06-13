import { getDb } from "./Connection";

export const PersonaBLL = {
    getPersonaList: async () => {
        const db = await getDb();
        const allRows = await db.getAllAsync(`SELECT * FROM Personas`);
        return allRows;
    },
    insertPersona: async (persona) => {
        const db = await getDb();
        await db.runAsync(
            `INSERT INTO Personas (nombres, apellidos, edad, ciudad, fechaNacimiento) VALUES (?, ?, ?, ?, ?)`,
            [
                persona.nombres,
                persona.apellidos,
                persona.edad,
                persona.ciudad,
                persona.fechaNacimiento,
            ]
        );
    },
};
