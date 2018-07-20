import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { AdMobBanner } from 'expo';


class Inbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-4762076392786064/7640436040" // Test ID, Replace with your-admob-unit-id
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
    adsHolder:{
        position: 'absolute',
        bottom: 0
    }
});