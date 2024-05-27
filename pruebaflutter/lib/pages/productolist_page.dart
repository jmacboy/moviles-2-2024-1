import 'package:flutter/material.dart';
import 'package:pruebaflutter/bll/producto_bll.dart';
import 'package:pruebaflutter/models/producto_model.dart';

class ProductoListPage extends StatefulWidget {
  const ProductoListPage({super.key});

  @override
  State<ProductoListPage> createState() => _ProductoListPageState();
}

class _ProductoListPageState extends State<ProductoListPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Lista de productos'),
        ),
        body: getBody(),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Producto producto = Producto(
              nombre: 'Producto 1',
              cantidad: 10,
              precio: 100,
            );
            ProductoBLL.insert(producto);
            setState(() {});
          },
          child: const Icon(Icons.add),
        ));
  }

  FutureBuilder<List<Producto>> getBody() {
    return FutureBuilder(
      future: ProductoBLL.selectAll(),
      builder: (BuildContext context, AsyncSnapshot<List<Producto>> snapshot) {
        if (snapshot.hasError) {
          print(snapshot.error);
          return const Center(
            child: Text('Error al cargar los productos'),
          );
        }
        if (snapshot.hasData) {
          return getProductoList(snapshot);
        } else {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }
      },
    );
  }

  ListView getProductoList(AsyncSnapshot<List<Producto>> snapshot) {
    return ListView.builder(
      itemCount: snapshot.data!.length,
      itemBuilder: (BuildContext context, int index) {
        Producto producto = snapshot.data![index];
        return ListTile(
          title: Text(producto.nombre),
          subtitle: Text(
              'Cantidad: ${producto.cantidad} - Precio: ${producto.precio}'),
        );
      },
    );
  }
}
