import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PersonaBLL } from "../dal/PersonaBLL";
const PersonaListPage = () => {
    const [personaList, setPersonaList] = useState([]);
    useEffect(() => {
        fetchPersonaList();
    }, []);
    const fetchPersonaList = async () => {
        await PersonaBLL.insertPersona({
            nombres: "Juan",
            apellidos: "Perez",
            edad: 30,
            ciudad: "Bogota",
            fechaNacimiento: "1990-01-01",
        });
        const theList = await PersonaBLL.getPersonaList();
        console.log(theList);
        setPersonaList(theList);
    };

    return (
        <View>
            <FlatList
                data={personaList}
                ItemSeparatorComponent={() => {
                    return <View style={styles.separator} />;
                }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.nombres} {item.apellidos}
                    </Text>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#C8C8C8",
    },
});
export default PersonaListPage;
