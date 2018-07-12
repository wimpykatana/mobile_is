import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Inbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile page</Text>
            </View>
        );
    }
}

export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});