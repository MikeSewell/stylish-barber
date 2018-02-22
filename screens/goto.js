import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import openMap from 'react-native-open-maps';
import Moment from 'moment';


export default class NextAppt extends Component {
    constructor(){
        super()

        this.state = {
            lastApptConfirm: false,
        }
    }
    async componentDidMount(){
        try {
            const lastApptConfirm = await AsyncStorage.getItem('lastApptConfirm');
            if (lastApptConfirm !== null) {
                this.setState({lastApptConfirm})
                console.log('last appt', lastApptConfirm);
            }
        } catch (error) {
            console.log('else :');
            // Error retrieving data
        }
    }
    _goToBarbershop() {
        openMap({ latitude: 37.865101, longitude: -119.538330 });
    }
    render() {
        let nextApptReminder = "No Upcoming Appointments";
        if (this.state.lastApptConfirm){
            console.log('in if: ', this.state.lastApptConfirm);
            nextApptReminder = Moment(this.state.lastApptConfirm).format("dddd, MMMM Do YYYY, h:mm:ss a");
        }
        return (
            <View style={styles.wrapper}>
                <Text style={styles.titleContent}>Stylish Barber</Text>
                <Text style={styles.textContent}>Your next appointment:</Text>
                <View>
                    <Text style={styles.textContentAppt}>
                        {nextApptReminder}
                    </Text>
                </View>

                <Button style={styles.btn}><Text style={styles.btnContent}> Email Me </Text></Button>
                <Button style={styles.btn}
                    onPress={this._goToBarbershop}
                ><Text style={styles.btnContent}> Open In Maps </Text></Button>
                <Button style={styles.btn}><Text style={styles.btnContent}> Share </Text></Button>

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
    textContentAppt:{
        paddingTop:20,
        paddingBottom:20
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
