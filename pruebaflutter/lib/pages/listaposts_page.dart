import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:pruebaflutter/models/post.dart';

class ListaPostsPage extends StatelessWidget {
  const ListaPostsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Posts'),
      ),
      body: getListView(),
    );
  }

  Widget getListView() {
    return FutureBuilder(
      future: fetchListaPosts(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return const Center(child: Text('Error al cargar los posts'));
        }
        if (!snapshot.hasData) {
          return const Center(child: CircularProgressIndicator());
        }
        print(snapshot.data);
        final List<Post> posts = postsFromJson(snapshot.data!.body);
        return ListView.builder(
          itemCount: posts.length,
          itemBuilder: (context, index) {
            return ListTile(
              onTap: () {
                Navigator.pushNamed(context, '/postdetail', arguments: posts[index].id);
              },
              title: Text(posts[index].title),
            );
          },
        );
      },
    );
  }

  Future<http.Response> fetchListaPosts() {
    return http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
  }
}
