import { SqliteService } from "../services/sqlite.service";
import { PersonaUpgradeStatements } from "../upgrades/persona.upgrade.statements";

export class BaseBLL {
    databaseName: string = "personatest";
    loadToVersion: number = 1;
    async initDb(
        sqliteService: SqliteService,
    ) {
        await sqliteService.initializePlugin();
        if (sqliteService.platform === 'web') {
            await sqliteService.initWebStore();
        }
        await sqliteService
        .addUpgradeStatement({  database: this.databaseName,
                                upgrade: new PersonaUpgradeStatements().userUpgrades});
        const db = await sqliteService.openDatabase(
            this.databaseName,
            false,
            'no-encryption',
            this.loadToVersion,
            false
        );
        
        return db;
    }
}