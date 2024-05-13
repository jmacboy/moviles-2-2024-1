import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:pruebaflutter/components/calendar_input.dart';

class FormValidadoPage extends StatefulWidget {
  const FormValidadoPage({super.key});

  @override
  State<FormValidadoPage> createState() => _FormValidadoPageState();
}

class _FormValidadoPageState extends State<FormValidadoPage> {
  final _formKey = GlobalKey<FormState>();
  final _nombreController = TextEditingController();
  final _apellidoController = TextEditingController();
  final _telefonoController = TextEditingController();
  final _dateController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Formulario Validado'),
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
              labelText: 'Nombre',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese un nombre';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _apellidoController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              labelText: 'Apellido',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese un apellido';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _telefonoController,
            keyboardType: TextInputType.text,
            decoration: const InputDecoration(
              labelText: 'Teléfono',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese un teléfono';
              }
              return null;
            },
          ),
          CalendarInput(
            controller: _dateController,
            initialDate: DateTime.now(),
          ),
          getButtonConDialog()
        ],
      ),
    );
  }

  getButtonConDialog() {
    return ElevatedButton(
      onPressed: () {
        if (!_formKey.currentState!.validate()) {
          return;
        }
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: const Text('Datos del formulario'),
              content: Text('Nombre: ${_nombreController.text}\n'),
              actions: <Widget>[
                TextButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: const Text('Cerrar'),
                ),
              ],
            );
          },
        );
      },
      child: const Text('Enviar'),
    );
  }
}
