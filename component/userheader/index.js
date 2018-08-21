import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, AsyncStorage,Image } from 'react-native';

let username;
let userpictureurl;

class Userheader extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userpictureurl
        }
    }

    async getToken(){
        try{

            this.setState({
                username : await AsyncStorage.getItem('username'),
                userpictureurl :'http://investorsukses.com/content/uploads/'+ await AsyncStorage.getItem('userpicture')
            })

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
                        <Text style={styles.helloText}>Hello, { this.state.username }</Text>
                    </View>

                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image
                            source={{uri: this.state.userpictureurl }}
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