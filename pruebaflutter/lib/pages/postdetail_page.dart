import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:pruebaflutter/models/post.dart';

class PostDetailPage extends StatelessWidget {
  const PostDetailPage({super.key});

  @override
  Widget build(BuildContext context) {
    var postId = ModalRoute.of(context)!.settings.arguments as int;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detalle del Post'),
      ),
      body: getPostDetail(postId),
    );
  }

  Widget getPostDetail(int postId) {
    return FutureBuilder(
        future: fetchPostDetail(postId),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Center(child: Text('Error al cargar el post'));
          }
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final post = postFromJson(snapshot.data!.body);
          return Column(
            children: [
              Text(post.body),
            ],
          );
        });
  }

  Future<http.Response> fetchPostDetail(int postId) {
    return http
        .get(Uri.parse('https://jsonplaceholder.typicode.com/posts/$postId'));
  }
}
