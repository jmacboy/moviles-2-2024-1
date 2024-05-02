import 'package:flutter/material.dart';

class ImagePage extends StatelessWidget {
  const ImagePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: const Text('Image Page'),
        ),
        body:
            Center(child: 
              Image.network('https://picsum.photos/250?image=9')
            )
        );
  }
}
