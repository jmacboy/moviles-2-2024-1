import 'package:flutter/material.dart';

class CalendarInput extends StatefulWidget {
  final TextEditingController controller;
  const CalendarInput({super.key, required this.controller});

  @override
  State<CalendarInput> createState() => _CalendarInputState();
}

class _CalendarInputState extends State<CalendarInput> {
  void callDatePicker() {
    showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    ).then((value) {
      if (value != null) {
        widget.controller.text = value.toString().split(' ')[0];
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            controller: widget.controller,
            readOnly: true,
            onTap: callDatePicker,
            decoration: const InputDecoration(
              hintText: 'Fecha de nacimiento',
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor ingrese una fecha de nacimiento';
              }
              return null;
            },
          ),
        ),
        MaterialButton(
          onPressed: callDatePicker,
          child: const Icon(Icons.calendar_month),
        )
      ],
    );
  }
}
