import 'package:flutter/material.dart';
import 'package:pruebaflutter/models/persona.dart';

class CardPage extends StatelessWidget {
  const CardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Lista de Compras'),
        ),
        body: getCardList());
  }

  getCard(Persona item) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          FadeInImage.assetNetwork(
              placeholder: 'assets/loading.gif',
              image:
                  'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg'),
          ListTile(
            title: Text('${item.nombre} ${item.apellido}'),
            subtitle: Text(item.telefono),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              TextButton(
                child: const Text('LLAMAR'),
                onPressed: () {},
              ),
              const SizedBox(width: 8),
            ],
          ),
        ],
      ),
    );
  }

  getCardList() {
    var items = <Persona>[
      Persona(nombre: "Juan", apellido: "Perez", telefono: "1234567890"),
      Persona(nombre: "Maria", apellido: "Gomez", telefono: "0987654321"),
      Persona(nombre: "Pedro", apellido: "Jimenez", telefono: "6789012345"),
      Persona(nombre: "Ana", apellido: "Rodriguez", telefono: "4567890123"),
      Persona(nombre: "Luis", apellido: "Gonzalez", telefono: "7890123456"),
    ];
    return ListView.builder(
        itemCount: items.length,
        itemBuilder: ((context, index) {
          return getCard(items[index]);
        }));
  }
}
