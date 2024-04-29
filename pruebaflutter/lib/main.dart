import 'package:flutter/material.dart';
import 'package:pruebaflutter/pages/calculator_page.dart';
import 'package:pruebaflutter/pages/home_page.dart';
import 'package:pruebaflutter/pages/image_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const MyHomePage(title: 'Flutter Demo Home Page'),
        '/image': (context) => const ImagePage(),
        '/calculator': (context) => const CalculatorPage(),
      },
    );
  }
}
