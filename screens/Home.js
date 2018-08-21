import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator,ScrollView,AsyncStorage,StatusBar,FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { AdMobBanner } from 'expo';
import Chart from './Chart';
import Profile from './Profile';
import PostItem from '../component/postitem';
import Userheader from '../component/userheader';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            useridreact: null,
            refreshing: false,
            page: null,
            posts: []
        }
    }

    async getToken(){
        try{

            this.setState({
                useridreact: await AsyncStorage.getItem('userid'),
            });

        }catch(error){
            console.log(error);
        }

        // this.getUserPost();
    }

    getUserPost = () =>{

        fetch('http://investorsukses.com/reactphp/getposts.php',{
        // fetch('http://192.168.100.6:8888/reactphp/getposts.php',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                'user': this.state.useridreact,
                'page': this.state.page
            })
        })
            .then(respon => respon.json())
            .then(res => {
                this.setState({
                    loading : false,
                    posts: [...this.state.posts, ...res],
                    refreshing: false });
            })
        console.log("fetch data")
        console.log(this.state.page)
    }

    handleEndList = () =>{

        console.log("handle end list");
        this.setState({
            refreshing: true,
            page: this.state.page + 1,
        },() => {
            this.getUserPost()
        });
    }

    handleRefresh = () => {

        console.log('refreshing')
        this.setState({ refreshing: true },() => {
            this.getUserPost()
        });

    }

    renderSeparator = () => {
        return(
            <View
                style={{ height: 10, width:'100%', backgroundColor: '#333'}}>
            </View>
        )
    }


    async componentDidMount(){
        this.setState({ loading : true });
        this.getToken();
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


                        <View style={{ flex: 1, backgroundColor:"#333" }} >
                            <FlatList
                                data={this.state.posts}
                                renderItem={
                                    ({item}) => <PostItem data={item} />
                                    // ({item}) => <Text>{item.text}</Text>
                                }
                                ItemSeparatorComponent={this.renderSeparator}
                                onRefresh={this.handleRefresh}
                                refreshing={this.state.refreshing}
                                keyExtractor={(item, index) => index.toString()}
                                onEndReached={ this.handleEndList }
                                onEndTreshold = {0}
                                showsVerticalScrollIndicator={false}

                            />
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

