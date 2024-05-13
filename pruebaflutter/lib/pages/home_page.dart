import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text(widget.title),
        ),
        body: Container(
          padding: const EdgeInsets.all(20.0),
          child: Column(children: [
            Row(children: <Widget>[
              const Text(
                'You have pushed the button this many times:',
              ),
              const Spacer(),
              Text(
                '$_counter',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
            ]),
            ElevatedButton(
              child: const Text('Ir a la página de imagen'),
              onPressed: () {
                Navigator.pushNamed(context, '/image');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de calculadora'),
              onPressed: () {
                Navigator.pushNamed(context, '/calculator');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de lista'),
              onPressed: () {
                Navigator.pushNamed(context, '/lista');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de lista con builder'),
              onPressed: () {
                Navigator.pushNamed(context, '/listabuilder');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de cards'),
              onPressed: () {
                Navigator.pushNamed(context, '/card');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de form'),
              onPressed: () {
                Navigator.pushNamed(context, '/form');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de form con validación'),
              onPressed: () {
                Navigator.pushNamed(context, '/formvalidado');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de lista de posts'),
              onPressed: () {
                Navigator.pushNamed(context, '/postlist');
              },
            ),
            ElevatedButton(
              child: const Text('Ir a la página de lista de personas'),
              onPressed: () {
                Navigator.pushNamed(context, '/personas');
              },
            ),
          ]),
        ),
        floatingActionButton: Row(
          children: [
            Container(
              margin: const EdgeInsets.only(left: 40.0),
              child: FloatingActionButton(
                  onPressed: _resetCounter,
                  tooltip: 'Reset',
                  heroTag: "reset",
                  child: const Icon(Icons.refresh)),
            ),
            const Spacer(),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                FloatingActionButton(
                  onPressed: _incrementCounter,
                  tooltip: 'Increment',
                  heroTag: "increment",
                  child: const Icon(Icons.add),
                ),
                FloatingActionButton(
                  onPressed: _decrementCounter,
                  tooltip: 'Decrement',
                  heroTag: "decrement",
                  child: const Icon(Icons.remove),
                ),
              ],
            ),
          ],
        ));
  }
}
