import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Inbox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.navigation.state.params.Data,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: 'http://investorsukses.com/content/uploads/'+this.state.data.userpicture}}
                    style={{width: 250, height: 250}}/>
                <Text>{this.state.data.username}</Text>
                <Text>{this.state.data.usergender}</Text>
                <Text>{this.state.data.userid}</Text>
                <Text>{this.state.data.usergroup}</Text>
                <Text>{this.state.data.subscribe}</Text>
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

