import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    async onDateChange(date) {
        this.props.getDay(date)
    }
    render() {
        const { selectedDate,  } = this.state;
        const startDate = selectedDate ? selectedDate.toString() : '';
        return (
            <View style={styles.container}>
                <CalendarPicker
                    textStyle={styles.textStyle}
                    onDateChange={this.onDateChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
    },
    textStyle:{
        color:"white"
    }
});