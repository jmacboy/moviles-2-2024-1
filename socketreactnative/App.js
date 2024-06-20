import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import socket from './socket';
import { useEffect, useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {

    socket.on('chat message', (message) => {
      console.log('Received message:', message);
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off('chat message');
    }
  }, [])



  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Text>
          {item.name}: {item.msg}
        </Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.formContainer}>

        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage} />
        <Pressable
          style={styles.sendButton}
          onPress={() => {
            socket.emit('chat message', {
              name: 'React client',
              msg: message
            });
            setMessage('');
          }}>
          <Text>Send</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
  formContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});
