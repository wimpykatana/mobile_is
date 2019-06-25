import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, TextInput,AsyncStorage, Image } from 'react-native';
import Userheader from '../component/userheader';
import { AdMobBanner } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';
import SingleChart from '../component/singlechart';



let typeChartAra = [{
    value: '',
    label: 'Instant Navigator'
}, {
    value: 'ARA',
    label: 'Hunter'
}];

let typeChartBiasa = [{
    value: '',
    label: 'Instant Navigator'
}];


let ticker = [{
    value: 'M5',
    label: '5 minutes'
},{
    value: 'M15',
    label: '15 minutes'
},{
    value: 'H1',
    label: '1 hour'
},{
    value: 'D1',
    label: 'Daily'
},{
    value: 'W1',
    label: 'Weekly'
},{
    value: 'M1',
    label: 'Monthly'
}];

class Inbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol:null,
            typeChart: null,
            ticker: null,
            isImageViewVisible: false,
            userGroup: null,
            chart: "http://investorsukses.com/empty.gif"
        }

        this.getGroup();

    }

    getGroup = async () => {

        try{

            this.setState({
                userGroup: await AsyncStorage.getItem('usergroup'),
            });

        }catch(error){
            console.log(error);
        }

        console.log(this.state.userGroup);

    }

    reqChart = () =>{
        fetch('http://13.250.138.145:1331/chart',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                'symbol': this.state.symbol,
                'timeframe': this.state.ticker,
                'type': this.state.typeChart
            })
        })
            .then(res => res.json())
            .then((data)=> {
                this.setState({
                    chart: data.response
                })

                // images[0].source.uri = this.state.chart
            })
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Userheader style={{flex: 1}} />

                <View style={{ flex: 1, backgroundColor:"#fff", paddingHorizontal: 8, paddingTop: 10 }} >
                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Stock Symbol"
                        placeholderTextColor='gray'
                        autoCapitalize="none"

                        onChangeText={symbol => this.setState({symbol})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={styles.fontColor}

                    />

                    <Dropdown
                        label='Type Chart'
                        data={this.state.userGroup == 4 ? typeChartAra : typeChartBiasa}
                        baseColor="rgba(0,0,0,.5)"
                        textColor="rgba(0,0,0,1)"
                        onChangeText={typeChart => this.setState({typeChart})}
                    />

                    <Dropdown
                        label='Ticker'
                        data={ticker}
                        baseColor="rgba(0,0,0,.5)"
                        textColor="rgba(0,0,0,1)"
                        onChangeText={ticker => this.setState({ticker})}
                    />

                    <View style={{ alignItems:"center" }}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={this.reqChart}
                        >
                            <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>Request Chart</Text>
                        </TouchableOpacity>
                    </View>

                    <SingleChart data={this.state.chart} />
                </View>



                <View style={styles.adsHolder}>
                    <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-4762076392786064/7640436040"
                        testDeviceID="EMULATOR"
                        onDidFailToReceiveAdWithError={this.bannerError}
                        style={styles.adsHolder}
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
        color:'#000',
        backgroundColor: 'white',
        fontSize: 16,
        borderBottomColor: "rgba(0, 0, 0, .2)",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    buttonStyle:{
        backgroundColor: '#f3ce21',
        marginVertical: 20,
        width: 290,
        borderRadius: 10,
        paddingVertical: 8,
        alignItems: 'center',

    },
    canvas: {
        minWidth: 320,
        minHeight: 180
    },
    adsHolder:{
        height: 50,
        justifyContent: 'center'
    },
});