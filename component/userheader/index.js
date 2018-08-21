import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, AsyncStorage,Image } from 'react-native';

let userid;
let username;
let usergender;
let usergroup;
let subscribe;
let userpicture;

class Userheader extends Component{

    async getToken(){
        try{
            userid = await AsyncStorage.getItem('userid');
            username = await AsyncStorage.getItem('username');
            usergender = await AsyncStorage.getItem('usergender');
            usergroup = await AsyncStorage.getItem('usergroup');
            subscribe = await AsyncStorage.getItem('subscribe');
            userpicture = await AsyncStorage.getItem('userpicture');
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount() {
        this.getToken();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{ marginTop: Platform.OS == 'android' ? 20 : null, height: 50, flexDirection:"row" }}>

                    <View style={{flex: 1, justifyContent:'center'}}>
                        <Text style={styles.helloText}>Hello, {username}</Text>
                    </View>

                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image
                            source={{uri: 'http://investorsukses.com/content/uploads/'+ userpicture}}
                            style={styles.avatar}
                        />
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    helloText:{
        color: '#fff',
        fontSize: 18,
        justifyContent: 'flex-start'
    },

    avatar:{
        width: 50,
        height: 50,
        justifyContent: 'flex-end',
        borderColor: '#333',
        borderWidth: 0.5,
    },
});

export default Userheader;