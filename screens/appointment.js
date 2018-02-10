import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.27

export default class Appointment extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.textContent}>Set Appointment</Text>
  
                <Button style={styles.btn}
                    onPress={() => this.props.navigation.navigate('Appt')}
                ><Text style={styles.btnContent}> Email </Text></Button>
                <Button style={styles.btn}><Text style={styles.btnContent}> Services </Text></Button>
                <Button style={styles.btn}><Text style={styles.btnContent}> Gallery </Text></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ba4d4d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 225,
        height: 225,
        backgroundColor: '#333',
        justifyContent: 'center'
    },
    textContent: {
        alignSelf: 'center',
        fontSize: 35,
        color: '#333',
    },
    btn: {
        borderRadius: 0,
        width: 175,
        marginTop: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#333',
    },
    btnContent: {
        color: 'white'
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200
    }
});