import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,Button,StatusBar,AsyncStorage, TouchableOpacity } from 'react-native';
import { AdMobBanner } from 'expo';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';


class Inbox extends Component {

    constructor(props) {
        super(props);

    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    };

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._signOutAsync}
                >
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#333'}}>Sign Out</Text>
                </TouchableOpacity>

                <AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-4762076392786064/7640436040"
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError}
                    style={styles.adsHolder}
                />
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
    },
    buttonStyle:{
        backgroundColor: '#f3ce21',
        marginVertical: 20,
        width: 290,
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',

    },
    adsHolder:{
        position: 'absolute',
        bottom: 0
    }
});