import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.27
import InstaPost from '../components/instaPost';

export default class Appointment extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.textContent}>Gallery</Text>
                <InstaPost />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.btn}
                ><Text>Back</Text></Button>
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
        display:'none'
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