import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator,ScrollView,AsyncStorage,StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { AdMobBanner } from 'expo';
import Chart from './Chart';
import Profile from './Profile';
import PostItem from '../component/postitem';
import Userheader from '../component/userheader';

let userid;
let username;
let usergender;
let usergroup;
let subscribe;
let userpicture;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            posts: []
        }
    }

    async getToken(){
        try{
            userid = await AsyncStorage.getItem('userid');
            username = await AsyncStorage.getItem('username');
            usergender = await AsyncStorage.getItem('usergender');
            usergroup = await AsyncStorage.getItem('usergroup');
            subscribe = await AsyncStorage.getItem('subscribe');
            userpicture = await AsyncStorage.getItem('userpicture');
        }catch(error){
            console.log(error);
        }
    }


    async componentDidMount(){
        this.getToken();
        this.setState({ loading : true });

        //query musti masih dibenerin
        await fetch('http://investorsukses.com/reactphp/getposts.php',{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        })
            .then((respon) => respon.json())
            .then((res)=> {
                this.setState({ loading : false, posts: res });
            })
    }

    render() {

        if(this.state.loading){
            return(
                <SafeAreaView style={styles.containerLoading}>
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

                        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                                {this.state.posts
                                    .map((post, i) => (
                                    <PostItem key={i} image={post.image}/>
                                ))}
                        </ScrollView>
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
        backgroundColor: '#333',
    },
    fontColor:{
        color:'#fff'
    },
    adsHolder:{
        height: 50,
        justifyContent: 'center'
    },
});

