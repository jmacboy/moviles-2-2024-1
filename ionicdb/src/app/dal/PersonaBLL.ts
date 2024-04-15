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
}
