import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Chart from './screens/Chart';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
    Home:{
      screen: Home,
      navigationOptions:{
          tabBarLabel: 'Home'
      }

    },
    Chart:{
        screen: Chart,
        navigationOptions:{
            tabBarLabel: 'Chart'
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'Profilegi'
        }
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
