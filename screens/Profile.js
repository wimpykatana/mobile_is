import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,Button,StatusBar,AsyncStorage, TouchableOpacity,SafeAreaView } from 'react-native';
// import { AdMobBanner } from 'expo';
import { AdMobBanner } from 'expo-ads-admob'
import Userheader from '../component/userheader';
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

            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Userheader style={{flex: 1}} />


                <View style={{ flex: 1, backgroundColor:"#fff", alignItems:"center"  }} >
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this._signOutAsync}
                    >
                        <Text style={{fontSize: 14, fontWeight: '600', color: '#333'}}>Sign Out</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.adsHolder}>
                    <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-4762076392786064/7640436040"
                        testDeviceID="EMULATOR"
                        onDidFailToReceiveAdWithError={this.bannerError}
                    />
                </View>
            </SafeAreaView>

        );
    }
}

export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    containerLoading:{
        flex: 1,
        backgroundColor: '#000',
    },
    fontColor:{
        color:'#fff'
    },
    adsHolder:{
        height: 50,
        justifyContent: 'center'
    },
    buttonStyle:{
        backgroundColor: '#f3ce21',
        marginVertical: 20,
        width: 290,
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',

    },
});