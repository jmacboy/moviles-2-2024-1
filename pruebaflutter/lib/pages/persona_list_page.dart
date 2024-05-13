import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:pruebaflutter/models/persona_json.dart';

class PersonaListPage extends StatelessWidget {
  const PersonaListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Lista de Personas'),
        ),
        body: getPersonaList(),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.pushNamed(context, '/personadetail');
          },
          child: const Icon(Icons.add),
        ),);
  }

  getPersonaList() {
    return FutureBuilder(
        future: fetchListaPersonas(),
        builder: ((context, snapshot) {
          if (snapshot.hasError) {
            return const Center(
                child: Text('Error al cargar la lista de personas'));
          }
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final personas = personaListJsonFromJson(snapshot.data!.body);
          return ListView.builder(
            itemCount: personas.length,
            itemBuilder: (context, index) {
              return ListTile(
                title: Text(
                    '${personas[index].nombres} ${personas[index].apellidos}'),
                subtitle: Text(personas[index].ciudad),
                onTap: () {
                  Navigator.pushNamed(context, '/personadetail',
                      arguments: personas[index].id);
                
                },
              );
            },
          );
        }));
  }

  Future<http.Response> fetchListaPersonas() {
    return http.get(Uri.parse('http://personas.jmacboy.com/personas'));
  }
}
