import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Chart from './screens/Chart';


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: ''
        }

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <View style={styles.container}>

                  <TextInput

                      // Adding hint in Text Input using Place holder.
                      placeholder="Enter User Email"

                      onChangeText={userName => this.setState({userName})}

                      // Making the Under line Transparent.
                      underlineColorAndroid='transparent'

                      style={styles.fontColor}
                  />

                  <TextInput

                      // Adding hint in Text Input using Place holder.
                      placeholder="Enter User Password"

                      onChangeText={userPassword => this.setState({userPassword})}

                      // Making the Under line Transparent.
                      underlineColorAndroid='transparent'

                      style={styles.fontColor}

                      secureTextEntry={true}
                  />

                  <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
              </View>
            </SafeAreaView>
        );
    }

    UserLoginFunction = () => {
        console.log("click button");

        const { userName }  = this.state ;
        const { userPassword }  = this.state ;

        fetch('http://localhost:8888/reactphp/login.php',{
           method: 'post',
            headers: {
               'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                'username': this.state.userName,
                'password': this.state.userPassword
            })
        })
            .then((respon) => respon.json())
            .then((res)=> {
                if(res === 'Data Matched')
                {
                    Alert.alert(res);
                    //Then open Profile activity and send user email to profile activity.
                    //this.props.navigation.navigate('Second', { Email: UserEmail });

                }
                else{

                    Alert.alert(res);
                }
            }).catch(( error )=>{
                console.error(error);
            })
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  fontColor:{
    color:'#fff'
  }
});
