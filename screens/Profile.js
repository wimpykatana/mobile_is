import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Inbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontColor}>Profile page</Text>
            </View>
        );
    }
}

export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontColor:{
        color:'#fff'
    }
});