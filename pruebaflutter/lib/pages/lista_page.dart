import 'package:flutter/material.dart';
class ListaPage extends StatelessWidget {
  const ListaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Compras'),
      ),
      body: getListaConItems(),
    );
  }

  ListView getLista() {
    return ListView(
      children: const <Widget>[
        ListTile(
          title: Text('Item 1'),
        ),
        ListTile(
          title: Text('Item 2'),
        ),
        Text("Hola")
      ],
    );
  }
  
  getListaConItems() {
    const items = <String>['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    var widgetArray = <Widget>[];
    for (var item in items) {
      widgetArray.add(ListTile(
        title: Text(item),
      ));
    }
    return ListView(
      children: widgetArray,
    );
  }
}