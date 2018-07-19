import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class LoginLogo extends React.Component{
    render(){
        return(
            <View>
                <View>
                   <Image
                       source={require('../../assets/loginlogo.png')}
                       style={{width: 250, height: 135}}/>
                </View>
            </View>
        );
    }

}

export default LoginLogo;