import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Item = ({ item, navigation }) => {
    return (
        <Pressable
            style={styles.item}
            onPress={() => {
                navigation.navigate("PostDetail", { postId: item.id });
            }}>
            <Text>{item.title}</Text>
        </Pressable>
    );
};
Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
const ListaPosts = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchPostList();
    }, []);
    const fetchPostList = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setData(response.data);
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => <Item item={item} navigation={navigation} />}
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
ListaPosts.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
export default ListaPosts;
