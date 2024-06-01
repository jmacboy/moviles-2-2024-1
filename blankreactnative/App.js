import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const App = () => {
    const [nombre, setNombre] = useState("");
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setNombre} value={nombre} style={styles.textInput} />
            <Text>Tu Nombre es: {nombre}</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
});

export default App;
