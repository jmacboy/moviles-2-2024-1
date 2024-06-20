import 'package:flutter/material.dart';
import 'package:fluttersockets/models/chat_message.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController _controller = TextEditingController();
  List<ChatMessage> messages = [];
  late IO.Socket socket;
  @override
  void initState() {
    super.initState();
    manageSocket();
  }

  void manageSocket() {
    socket = IO.io('http://192.168.60.43:3000', <String, dynamic>{
      'autoConnect': false,
      'transports': ['websocket'],
    });
    socket.connect();
    socket.onConnect((_) {
      print('socket connected');
    });
    socket.on(
        'chat message',
        (data) => {
              setState(() {
                messages.add(ChatMessage(name: data['name'], msg: data['msg']));
              })
            });
  }

  void sendMessage() {
    String msg = _controller.text;
    if (msg.isEmpty) {
      return;
    }
    socket.emit("chat message", {"name": "Flutter", "msg": msg});
    _controller.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text(widget.title),
        ),
        body: Column(
          children: [getMessageList(), getMessageForm()],
        ));
  }

  getMessageList() {
    return Expanded(
      child: ListView.builder(
        itemCount: messages.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(messages[index].name),
            subtitle: Text(messages[index].msg),
          );
        },
      ),
    );
  }

  getMessageForm() {
    return Container(
      padding: EdgeInsets.all(8),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: _controller,
              decoration: const InputDecoration(
                hintText: 'Enter your message',
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.send),
            onPressed: () {
              sendMessage();
            },
          )
        ],
      ),
    );
  }
}
