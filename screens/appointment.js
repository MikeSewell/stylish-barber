import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.27
import moment from 'moment';
import { Dropdown } from 'react-native-material-dropdown';
import DropdownService from '../components/serviceDrop';
import TimeAvail from '../components/timeAvail';
import CalCon from '../components/calender';
import Confirm from '../screens/confirm';

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {

            currentDayAppt: [],
            selectedDayTimes:[],
            selectedTime: null,
            selectedService: null,
            confirmed: false

        };
        this.getDay = this.getDay.bind(this);
        this.createAppt = this.createAppt.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getService = this.getService.bind(this);

    }

    componentDidMount(){
        // fetch the calendar populate the state
        // this.getDay()
    }
    async getDay(end) {
        const start = moment(end).add(1, 'days');
        const response = await fetch('http://localhost:5000/v1/day', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start,
                end
            }),
        });
        let currentDayAppt = await response.json();
        this.setState({currentDayAppt})
        const selectedDayTimes = []
        await currentDayAppt.forEach(element => {
            selectedDayTimes.push(moment(element.start.dateTime).format("LT"))
        });
        this.setState({selectedDayTimes});
    }
    getTime(item, index) {
        this.setState({ selectedTime: index });
    }
    getService(item, index){
        this.setState({ selectedService: item });
    }
    async createAppt(){
        const response = await fetch('http://localhost:5000/v1/event/make', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.currentDayAppt[this.state.selectedTime].id,
                name: this.state.selectedService + " " + " test name and service",
                start: this.state.currentDayAppt[this.state.selectedTime].start.dateTime,
                end: this.state.currentDayAppt[this.state.selectedTime].end.dateTime
            }),
        });
        const confirmed = await response.json();
        this.setState({ confirmed})

        try {
            await AsyncStorage.setItem('lastApptConfirm', confirmed.start.dateTime);
        } catch (error) {
            // Error saving data
        }
        const lastApptConfirm = await AsyncStorage.getItem('lastApptConfirm');
        console.log(lastApptConfirm);
    }
    
    
    render() {

        if(!this.state.confirmed){
            return (                    
                    <View style={styles.wrapper}>
                    <Text style={styles.textContent}>Set Appointment</Text>
                    <CalCon getDay={this.getDay} />
                    <TimeAvail 
                    getTime={this.getTime}
                    timtest={this.state} 
                    />
                    <DropdownService
                    getService={this.getService}
                    />
                    <Button 
                    style={styles.btn}
                    onPress={this.createAppt}
                    ><Text style={styles.btnContent}>Set Appointment</Text></Button>
                    </View> 
            );
        }
        else {
            return(
                <Confirm
                nextAppt={this.state.confirmed}
                />
            );
        }

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
    },
    timeSec:{
        height: 60
    }
});