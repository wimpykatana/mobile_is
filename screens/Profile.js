import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AdMobBanner } from 'expo';


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