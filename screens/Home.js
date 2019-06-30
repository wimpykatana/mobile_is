import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator,ScrollView,AsyncStorage,StatusBar,FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
// import { AdMobBanner } from 'expo';
import { AdMobBanner } from 'expo-ads-admob'
import Chart from './Chart';
import Profile from './Profile';
import Userheader from '../component/userheader';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            useridreact: null,
            refreshing: false,
            page: 0,
            posts: []
        }
    }




    render() {
        if(this.state.loading){
            return(
                <SafeAreaView style={styles.containerLoading}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <Userheader style={{flex: 1}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large"/>
                        <Text style={styles.fontColor}>Loading</Text>
                    </View>
                </SafeAreaView>
            )
        }else{
            return (

                    <SafeAreaView style={styles.container}>
                        <StatusBar
                            barStyle="light-content"
                        />
                        <Userheader style={{flex: 1}} />


                        <View style={{ flex: 1, backgroundColor:"#fff", alignItems:"center" }} >
                            <Text>Cara pakai chart</Text>
                            <Text>klik icon chart  kemudian isi nama saham di stock symbol</Text>
                            <Text>kemudian isi jenis chart di type chart</Text>
                            <Text>lalu isi ticker time frame chart 15m 1hour daily weekly</Text>
                            <Text>dan klik request chart</Text>
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
            )
        }
    }
}

export default createBottomTabNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor}) => (
                <Image source={require('../assets/menu/tea-cup.png')}
                       style={{ height: 25, width: 25, tintColor: tintColor }}/>
            )
        }

    },
    Chart:{
        screen: Chart,
        navigationOptions:{
            tabBarLabel: 'Chart',
            tabBarIcon:({tintColor}) => (
                <Image source={require('../assets/menu/international-search-for-money.png')}
                       style={{ height: 25, width: 25, tintColor: tintColor }}/>
            )
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'Profile',
            tabBarIcon:({tintColor}) => (
                <Image source={require('../assets/menu/businessman-in-ascending-business-bars-graphic.png')}
                       style={{ height: 25, width: 25, tintColor: tintColor }}/>
            )
        }
    },

},{
    tabBarOptions:{
        activeTintColor: '#f3ce21',
        inactiveTintColor: 'gray',
        style:{
            backgroundColor: 'black',
            borderTopWidth: 0,
            shadowOffset: { width:0, height:2 },
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 10,
            paddingVertical: 10,
            height: 60,
        }
    }
})

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
});

