export class PersonaUpgradeStatements {
    userUpgrades = [
        {
            toVersion: 1,
            statements: [
                `CREATE TABLE IF NOT EXISTS personas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombres TEXT NOT NULL,
            apellidos TEXT NOT NULL,
            ciudad TEXT NOT NULL,
            edad INTEGER NOT NULL,
            fechaNacimiento TEXT NOT NULL
            );`
            ]
        }
    ]
}
