import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Image, Alert } from 'react-native';
import Loginlogo from '../component/loginlogo';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            userEmail: '',
            userPassword: ''

        }
    }


    UserRegis = () =>{
        const { fullName }  = this.state;
        const { userName }  = this.state;
        const { userEmail }  = this.state;
        const { userPassword }  = this.state;


        fetch("http://13.250.138.145:1331/register",{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.userName,
                useremail: this.state.userEmail,
                userpass: this.state.userPassword,
                userfullname: this.state.fullName,

            }),
        })
            .then((res) => res.json())
            .then((data) => {
               if(data.error){
                   Alert.alert(data.error.sqlMessage)
               }else{
                   Alert.alert("Register Success. You can login")
               }
            });


    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Loginlogo/>
                <Text style={{fontSize: 30, marginBottom: 20, color: '#fff'}}>
                   Register
                </Text>
                <View style={styles.signinHolder}>

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter Full Name"
                        placeholderTextColor='gray'
                        autoCapitalize="none"

                        onChangeText={fullName => this.setState({fullName})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.fontColor}
                    />

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter User Name"
                        placeholderTextColor='gray'
                        autoCapitalize="none"

                        onChangeText={userName => this.setState({userName})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.fontColor}
                    />

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter User Email"
                        placeholderTextColor='gray'
                        autoCapitalize="none"

                        onChangeText={userEmail => this.setState({userEmail})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.fontColor}
                    />

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter User Password"
                        placeholderTextColor='gray'
                        autoCapitalize="none"

                        onChangeText={userPassword => this.setState({userPassword})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.fontColor}

                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.UserRegis}
                >
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#333'}}>Submit Registration</Text>
                </TouchableOpacity>

                <View>
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
        paddingTop: 30
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