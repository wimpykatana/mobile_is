import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput, Button, Alert, TouchableOpacity, AsyncStorage,ActivityIndicator } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home';
import Login from './screens/Login';

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('access_token');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Login');
    };

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        );
    }
}

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: Home,
        Login: Login,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30
  },
    fontColor:{
        color:'#fff'
    },
});
