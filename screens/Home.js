import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator,ScrollView } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { AdMobBanner } from 'expo';
import Chart from './Chart';
import Profile from './Profile';
import PostItem from '../component/postitem';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.Data,
            loading: false,
            posts: []
        }
    }

    async componentDidMount(){
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
                <SafeAreaView style={styles.container}>
                    <ActivityIndicator size="large"/>
                    <Text style={styles.fontColor}>Loading</Text>
                </SafeAreaView>
            )
        }else{
            return (

                    <SafeAreaView style={styles.container}>
                        <View>
                            <Text>{this.state.data.username}</Text>
                            <Text>{this.state.data.usergender}</Text>
                            <Text>{this.state.data.userid}</Text>
                            <Text>{this.state.data.usergroup}</Text>
                            <Text>{this.state.data.subscribe}</Text>
                        </View>
                        <ScrollView style={{marginBottom:60}} showsVerticalScrollIndicator={false}>
                                {this.state.posts.map((post, i) => (
                                    <PostItem key={i} image={post.image}/>
                                ))}
                        </ScrollView>

                    <View style={styles.container}>
                        <AdMobBanner
                            bannerSize="smartBannerPortrait"
                            adUnitID="ca-app-pub-4762076392786064/7640436040"
                            testDeviceID="EMULATOR"
                            onDidFailToReceiveAdWithError={this.bannerError}
                            style={styles.adsHolder}/>
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
    },
});

