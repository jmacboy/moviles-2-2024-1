import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseProvider{
  DatabaseProvider._();
  static Database? _database;
  static final DatabaseProvider db = DatabaseProvider._();
  static Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await initDB();
    return _database!;
  }
  static initDB() async {
    String documentsDirectory = await getDatabasesPath();
    String path = join(documentsDirectory, "dbpersona.db");
    return await openDatabase(path, version: 1, onOpen: (db) {},
        onCreate: (Database db, int version) async {
      await db.execute("CREATE TABLE productos ("
          "id INTEGER PRIMARY KEY AUTOINCREMENT,"
          "nombre TEXT,"
          "precio INTEGER,"
          "cantidad INTEGER"
          ")");
    });
  }
}