import { Persona } from "../models/persona";
import { SqliteService } from "../services/sqlite.service";
import { BaseBLL } from "./BaseBLL";

export class PersonaBLL extends BaseBLL {

    async selectAll(
        sqliteService: SqliteService
    ): Promise<Persona[]> {
        const db = await this.initDb(sqliteService);
        const personas: Persona[] =
            (await db.query('SELECT * FROM personas;'))
                .values as Persona[];
        return personas;
    }
    async insert(
        sqliteService: SqliteService,
        persona: Persona
    ): Promise<number | undefined> {
        const db = await this.initDb(sqliteService);
        const result = await db.run(
            `INSERT INTO personas (nombres, apellidos, ciudad, edad, fechaNacimiento) 
            VALUES (?, ?, ?, ?, ?);`,
            [persona.nombres, persona.apellidos, persona.ciudad, 
                persona.edad, persona.fechaNacimiento]
        );
        return result.changes?.lastId;
    }
    async selectById(
        sqliteService: SqliteService,
        id: number
    ): Promise<Persona | undefined> {
        const db = await this.initDb(sqliteService);
        const result = 
            (await db.query('SELECT * FROM personas WHERE id = ?;', [id]));
        let persona: Persona | undefined = undefined;
        if (result.values && result.values.length > 0)
            persona = result.values[0] as Persona;
        return persona;
    }
    async update(
        sqliteService: SqliteService,
        persona: Persona
    ): Promise<number | undefined> {
        const db = await this.initDb(sqliteService);
        const result = await db.run(
            `UPDATE personas SET nombres = ?, apellidos = ?, ciudad = ?, 
            edad = ?, fechaNacimiento = ? WHERE id = ?;`,
            [persona.nombres, persona.apellidos, persona.ciudad, 
                persona.edad, persona.fechaNacimiento, persona.id]
        );
        return result.changes?.changes;
    }
    async delete(
        sqliteService: SqliteService,
        id: number
    ): Promise<number | undefined> {
        const db = await this.initDb(sqliteService);
        const result = await db.run('DELETE FROM personas WHERE id = ?;', [id]);
        return result.changes?.changes;
    }
    
    
}
