import 'package:pruebaflutter/models/producto_model.dart';
import 'package:pruebaflutter/providers/database_provider.dart';

class ProductoBLL {
  static Future<int> insert(Producto producto) async {
    final db = await DatabaseProvider.database;
    var res = await db.insert("productos", producto.toJson());
    return res;
  }

  static Future<List<Producto>> selectAll() async {
    final db = await DatabaseProvider.database;
    var res = await db.query("productos");
    List<Producto> list =
        res.isNotEmpty ? res.map((c) => Producto.fromJson(c)).toList() : [];
    return list;
  }
}
