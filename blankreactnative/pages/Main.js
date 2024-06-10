import React from "react";
import { View } from "react-native";
import { Button } from "react-native-web";
const Main = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Ir a calculadora"
                onPress={() => {
                    navigation.navigate("Calculadora");
                }}
            />
            <Button
                title="Ir a FormNombre"
                onPress={() => {
                    navigation.navigate("FormNombre");
                }}
            />
            <Button
                title="Ir a Lista"
                onPress={() => {
                    navigation.navigate("Lista");
                }}
            />
            <Button
                title="Ir a Lista de Posts"
                onPress={() => {
                    navigation.navigate("PostList");
                }}
            />
        </View>
    );
};

export default Main;
