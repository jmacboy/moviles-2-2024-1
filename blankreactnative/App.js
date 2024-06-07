import React from "react";
import Calculadora from "./Calculadora";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormNombre from "./FormNombre";
import Main from "./Main";
const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Calculadora" component={Calculadora} />
                <Stack.Screen name="FormNombre" component={FormNombre} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
