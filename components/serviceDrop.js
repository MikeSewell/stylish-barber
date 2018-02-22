import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { Dropdown } from 'react-native-material-dropdown';


export default class ServiceDrop extends Component {
    render() {
        let data = [{
            value: 'Haircut',
        }, {
            value: 'Beard Trim',
        }, {
            value: 'Full Service',
        }];

        return (
            <Dropdown
                label='Choose Service'
                data={data}
                onChangeText={this.props.getService}
                containerStyle={styles.container}
                pickerStyle={styles.picker}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: 225,
        backgroundColor: '#ba4d4d',
        justifyContent: 'center',
        marginBottom: 5
    },
    picker: {
        
    }
});