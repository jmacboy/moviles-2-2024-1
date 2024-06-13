import React from "react";
import Calculadora from "./pages/Calculadora";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormNombre from "./pages/FormNombre";
import Main from "./pages/Main";
import ListaPage from "./pages/ListaPage";
import ListaPosts from "./pages/ListaPosts";
import PostDetail from "./pages/PostDetail";
import PersonaListPage from "./pages/PersonaListPage";
const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Calculadora" component={Calculadora} />
                <Stack.Screen name="FormNombre" component={FormNombre} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Lista" component={ListaPage} />
                <Stack.Screen name="PostList" component={ListaPosts} />
                <Stack.Screen name="PostDetail" component={PostDetail} />
                <Stack.Screen name="PersonaList" component={PersonaListPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
