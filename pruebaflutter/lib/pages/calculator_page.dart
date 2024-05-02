import 'package:flutter/material.dart';

class CalculatorPage extends StatefulWidget {
  const CalculatorPage({super.key});

  @override
  State<CalculatorPage> createState() => _CalculatorPageState();
}

class _CalculatorPageState extends State<CalculatorPage> {
  String _result = '';
  String currentOperation = '';
  int firstNumber = 0;
  void appendNumber(int number) {
    setState(() {
      _result += number.toString();
    });
  }

  void startOperation(String operation) {
    currentOperation = operation;
    firstNumber = 0;
    if (_result.isNotEmpty) {
      firstNumber = int.parse(_result);
    }
    setState(() {
      _result = '';
    });
  }

  void doOperation() {
    int secondNumber = 0;
    if (_result.isNotEmpty) {
      secondNumber = int.parse(_result);
    }
    int operationResult = 0;
    switch (currentOperation) {
      case '+':
        operationResult = firstNumber + secondNumber;
        break;
      case '-':
        operationResult = firstNumber - secondNumber;
        break;
      case 'x':
        operationResult = firstNumber * secondNumber;
        break;
      case '/':
        operationResult = firstNumber ~/ secondNumber;
        break;
    }
    setState(() {
      if (operationResult == 0) {
        _result = '';
      } else {
        _result = operationResult.toString();
      }
    });
  }

  void clearOne() {
    setState(() {
      if (_result.isNotEmpty) {
        _result = _result.substring(0, _result.length - 1);
      }
    });
  }

  void clearEverything() {
    setState(() {
      _result = '';
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
              Row(children: [
                Expanded(
                    child: Text(
                  _result.isEmpty ? '0' : _result,
                  style: Theme.of(context).textTheme.headlineMedium,
                  textAlign: TextAlign.right,
                ))
              ]),
              getNumberPanel(),
            ],
          )),
    );
  }

  getNumberPanel() {
    return Column(
      children: [
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getClearOneButton(),
              getClearEverythingButton(),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getNumberButton(1),
              getNumberButton(2),
              getNumberButton(3),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getNumberButton(4),
              getNumberButton(5),
              getNumberButton(6),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getNumberButton(7),
              getNumberButton(8),
              getNumberButton(9),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getNumberButton(0),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [
              getOperationButton('+'),
              getOperationButton('-'),
              getOperationButton('x'),
              getOperationButton('/'),
            ],
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 10.0),
          child: Row(
            children: [getEqualsButton()],
          ),
        )
      ],
    );
  }

  Widget getNumberButton(int number) {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(right: 5.0, left: 5.0),
        child: MaterialButton(
          onPressed: () {
            appendNumber(number);
          },
          color: Theme.of(context).colorScheme.primary,
          textColor: const Color.fromRGBO(255, 255, 255, 1),
          child: Text('$number'),
        ),
      ),
    );
  }

  Widget getOperationButton(String operation) {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(right: 5.0, left: 5.0),
        child: MaterialButton(
          onPressed: () {
            startOperation(operation);
          },
          color: Theme.of(context).colorScheme.primary,
          textColor: const Color.fromRGBO(255, 255, 255, 1),
          child: Text(operation),
        ),
      ),
    );
  }

  getEqualsButton() {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(right: 5.0, left: 5.0),
        child: MaterialButton(
          onPressed: doOperation,
          color: Theme.of(context).colorScheme.primary,
          textColor: const Color.fromRGBO(255, 255, 255, 1),
          child: const Text('='),
        ),
      ),
    );
  }

  getClearOneButton() {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(right: 5.0, left: 5.0),
        child: MaterialButton(
          onPressed: clearOne,
          color: Theme.of(context).colorScheme.primary,
          textColor: const Color.fromRGBO(255, 255, 255, 1),
          child: const Text('C'),
        ),
      ),
    );
  }

  getClearEverythingButton() {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(right: 5.0, left: 5.0),
        child: MaterialButton(
          onPressed: clearEverything,
          color: Theme.of(context).colorScheme.primary,
          textColor: const Color.fromRGBO(255, 255, 255, 1),
          child: const Text('CE'),
        ),
      ),
    );
  }
}
