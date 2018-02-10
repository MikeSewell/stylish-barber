import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from './screens/dashboard';
import Goto from './screens/goto';
import Appt from './screens/appointment';
import Gallery from './screens/gallery';
import Services from './screens/services';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ba4d4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
});

export default TabNavigator({
  About: { 
    screen: StackNavigator({
      Dashboard:{ screen: Dashboard },
      Services:{ screen: Services },
      Gallery: { screen: Gallery }
    }) 
  },
  Map: { screen: Goto },
  Appt: { screen: Appt }
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'About') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Map') {
          iconName = `ios-navigate${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Appt') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        }
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ba4d4d',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: '#333',
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);