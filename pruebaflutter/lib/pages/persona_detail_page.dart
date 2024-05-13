import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:pruebaflutter/components/calendar_input.dart';
import 'package:pruebaflutter/models/persona_json.dart';

class PersonaDetailPage extends StatefulWidget {
  final int? personaId;

  const PersonaDetailPage({super.key, required this.personaId});

  @override
  State<PersonaDetailPage> createState() => _PersonaDetailPageState();
}

class _PersonaDetailPageState extends State<PersonaDetailPage> {
  final _formKey = GlobalKey<FormState>();
  final _nombreController = TextEditingController();
  final _apellidoController = TextEditingController();
  final _edadController = TextEditingController();
  final _ciudadController = TextEditingController();
  final _fechaNacimientoController = TextEditingController();
  DateTime initialDate = DateTime.now();

  void changeDate(DateTime newDate) {
    setState(() {
      initialDate = newDate; // Cambia el valor de initialDate
    });
  }

  @override
  void initState() {
    super.initState();
    if (widget.personaId != null) {
      fetchPersonaById(widget.personaId as int);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detalle de la persona'),
      ),
      body: getForm(context),
    );
  }

  getForm(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _nombreController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              labelText: 'Nombres',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese los nombres';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _apellidoController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              labelText: 'Apellidos',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese los apellidos';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _ciudadController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              labelText: 'Ciudad',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese la ciudad';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _edadController,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(
              labelText: 'Edad',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese la edad';
              }
              return null;
            },
          ),
          CalendarInput(
              controller: _fechaNacimientoController, initialDate: initialDate),
          getButton()
        ],
      ),
    );
  }

  getButton() {
    return ElevatedButton(
      onPressed: () {
        if (!_formKey.currentState!.validate()) {
          return;
        }
      },
      child: const Text("Guardar"),
    );
  }

  void savePersona() {
    if (widget.personaId == null) {
      createPersona(PersonaJson(
          nombres: _nombreController.text,
          apellidos: _apellidoController.text,
          edad: int.parse(_edadController.text),
          ciudad: _ciudadController.text,
          fechaNacimiento: DateTime.parse(_fechaNacimientoController.text)));
    } else {
      updatePersona(PersonaJson(
          id: widget.personaId,
          nombres: _nombreController.text,
          apellidos: _apellidoController.text,
          edad: int.parse(_edadController.text),
          ciudad: _ciudadController.text,
          fechaNacimiento: DateTime.parse(_fechaNacimientoController.text)));
    }
  }

  void fetchPersonaById(int personaId) async {
    print('fetchPersonaById');
    var persona = await fetchPersonaFromAPI(personaId);
    if (mounted) {
      changeDate(persona.fechaNacimiento);
    }
    _nombreController.text = persona.nombres;
    _apellidoController.text = persona.apellidos;
    _ciudadController.text = persona.ciudad;
    _edadController.text = persona.edad.toString();
    _fechaNacimientoController.text =
        persona.fechaNacimiento.toString().split(' ')[0];
  }

  Future<PersonaJson> fetchPersonaFromAPI(int personaId) {
    print('fetchPersonaFromAPI');
    return http
        .get(Uri.parse('http://personas.jmacboy.com/personas/$personaId'))
        .then((response) {
      return personaJsonFromJson(response.body);
    });
  }

  void createPersona(PersonaJson persona) {
    http
        .post(Uri.parse('http://personas.jmacboy.com/personas'),
            body: personaJsonToJson(persona))
        .then((response) {
      Navigator.pop(context);
    });
  }

  void updatePersona(PersonaJson persona) {
    http
        .post(Uri.parse('http://personas.jmacboy.com/personas/${widget.personaId}'),
            body: personaJsonToJson(persona))
        .then((response) {
      Navigator.pop(context);
    });
  }
}
