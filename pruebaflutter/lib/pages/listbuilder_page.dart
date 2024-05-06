import 'package:flutter/material.dart';

class ListBuilderPage extends StatelessWidget {
  const ListBuilderPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Compras'),
      ),
      body: getListaConDivider(),
    );
  }

  ListView getLista() {
    const items = <String>['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(items[index]),
        );
      },
    );
  }

  getListaConDivider() {
    const items = <String>['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    return ListView.separated(
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(items[index]),
          );
        },
        separatorBuilder: (context, index) {
          return const Divider();
        },
        itemCount: items.length);
  }
}
