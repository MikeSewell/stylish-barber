import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import Moment from 'moment';


export default class Confirmation extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.titleContent}>Stylish Barber</Text>
                <Text style={styles.textContent}>Your appointment has been created!</Text>
                <View>
                    <Text style={styles.textContent}>
                        {Moment(this.props.nextAppt.start.dateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                    </Text>
                </View>

                <Button style={styles.btn}><Text style={styles.btnContent}> Email Me </Text></Button>
                <Button style={styles.btn}><Text style={styles.btnContent}> Share </Text></Button>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
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
