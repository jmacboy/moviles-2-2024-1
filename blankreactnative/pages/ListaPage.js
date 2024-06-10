import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
const Item = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text>
                {item.nombre} {item.apellido}
            </Text>
        </View>
    );
};
Item.propTypes = {
    item: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
    }).isRequired,
};
const ListaPage = () => {
    const data = [
        { id: "1", nombre: "Juan", apellido: "Perez", edad: 20 },
        { id: "2", nombre: "Pedro", apellido: "Velez", edad: 25 },
        { id: "3", nombre: "Maria", apellido: "Benitez", edad: 30 },
        { id: "4", nombre: "Ana", apellido: "García", edad: 35 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => <Item item={item} />}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
    },
});
export default ListaPage;
