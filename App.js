import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import Ionicons from 'react-native-vector-icons/Ionicons';


class AboutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About!</Text>
      </View>
    );
  }
}

class MapScreen extends Component {
  componentMount(){
    openMap({ latitude: 37.865101, longitude: -119.538330 });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map!</Text>
      </View>
    );
  }
}
class ApptScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Appt!</Text>
      </View>
    );
  }
}

export default TabNavigator({
  About: { screen: AboutScreen },
  Map: { screen: MapScreen},//onclick: openMap({ latitude: 37.865101, longitude: -119.538330 }) },
  Appt: { screen: ApptScreen}
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

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
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