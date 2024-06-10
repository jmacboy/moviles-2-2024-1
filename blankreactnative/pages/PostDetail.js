import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View } from "react-native";
const PostDetail = ({ route, navigation }) => {
    const { postId } = route.params;
    const [item, setItem] = useState(null);
    useEffect(() => {
        if (!postId) {
            return;
        }
        fetchPostById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);
    const fetchPostById = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response) => {
            setItem(response.data);
            navigation.setOptions({ title: response.data.title });
        });
    };
    return (
        <View style={styles.container}>
            <Text>
                <b>User Id: </b>
                {item?.userId}
            </Text>
            <Text>{item?.body}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
PostDetail.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            postId: PropTypes.number,
        }).isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
        setOptions: PropTypes.func.isRequired,
    }).isRequired,
};
export default PostDetail;
