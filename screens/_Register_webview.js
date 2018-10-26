import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, StatusBar, WebView, Image, Alert } from 'react-native';
import Loginlogo from '../component/loginlogo';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    hideSpinner() {
        this.setState({ visible: false });
    }

    render(){
        return(

            <SafeAreaView style={styles.container}>


                <View style={{ flex: 2 }}>
                    <WebView
                        onLoad={() => this.hideSpinner()}
                        style={{ height:100, width:350,backgroundColor: '#333' }}
                        source={{uri: 'http://investorsukses.com/signup'}}
                        // source={{ html: '<h1 style="background-color: black; color: white">Hello world</h1>' }}
                    />
                    {this.state.visible && (
                        <ActivityIndicator
                            style={{ position: 'absolute' }}
                            size="large"
                        />
                    )}
                </View>

                <View style={{flex:1, paddingTop: 20}}>
                    <Text style={styles.login}
                          onPress={() => {

                              this.props.navigation.navigate('Login');
                          }}
                    >Already have account login here !</Text>
                </View>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        paddingTop: 30,
        height: 500
    },
    fontColor:{
        color:'#333',
        backgroundColor: 'white',
        fontSize: 14,
        width: 250,
        height: 30,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderRadius: 3,
        textAlignVertical: 'center'
    },
    signinHolder:{
        borderWidth: 2, borderColor: 'rgba(255,255,255,0.15)',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderRadius: 8
    },
    buttonStyle:{
        backgroundColor: '#f3ce21',
        marginVertical: 20,
        width: 290,
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',

    },
    login:{
        color: '#f3ce21',
        textDecorationLine: 'underline'
    }

});

export default Register;