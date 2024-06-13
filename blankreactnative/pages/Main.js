import React from "react";
import PropTypes from "prop-types";

import { Pressable, StyleSheet, Text, View } from "react-native";
const Main = ({ navigation }) => {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Calculadora");
                }}>
                <Text style={styles.buttonText}>Ir a Calculadora</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("FormNombre");
                }}>
                <Text style={styles.buttonText}>Ir a FormNombre</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Lista");
                }}>
                <Text style={styles.buttonText}>Ir a Lista</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("PostList");
                }}>
                <Text style={styles.buttonText}>Ir a Lista de Posts</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("PersonaList");
                }}>
                <Text style={styles.buttonText}>Ir a Lista de Personas</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: "#2196F3",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
    },
});
Main.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
export default Main;
