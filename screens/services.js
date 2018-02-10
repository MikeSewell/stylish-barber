import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';


export default class NextAppt extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.titleContent}>Services</Text>
                <View>
                    <Text style={styles.textContent}>
                        appointment datetime
                    </Text>
                </View>
                <Button
                    onPress={() => this.props.navigation.goBack()}
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
    titleContent: {
        alignSelf: 'center',
        fontSize: 35,
        color: '#333',
    },
    textContent: {
        alignSelf: 'center',
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
});