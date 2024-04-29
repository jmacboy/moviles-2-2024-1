import 'package:flutter/material.dart';

class CalculatorPage extends StatefulWidget {
  const CalculatorPage({super.key});

  @override
  State<CalculatorPage> createState() => _CalculatorPageState();
}

class _CalculatorPageState extends State<CalculatorPage> {
  String _result = '';
  void appendNumber(int number) {
    setState(() {
      _result += number.toString();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Calculadora'),
      ),
      body: Container(
          margin: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              Text(_result),
              getNumberPanel(),
            ],
          )),
    );
  }

  getNumberPanel() {
    return Column(
      children: [
        Row(
          children: [
            getNumberButton(1),
            getNumberButton(2),
            getNumberButton(3),
          ],
        ),
        Row(
          children: [
            getNumberButton(4),
            getNumberButton(5),
            getNumberButton(6),
          ],
        ),
        Row(
          children: [
            getNumberButton(7),
            getNumberButton(8),
            getNumberButton(9),
          ],
        ),
      ],
    );
  }

  Widget getNumberButton(int number) {
    return ElevatedButton(
      onPressed: () {
        appendNumber(number);
      },
      child: Text('$number'),
    );
  }
}
