import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';


export default class NextAppt extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ScrollView >
                <View style={styles.wrapper}>
                    <Text style={styles.titleContent}>Services</Text>

                </View>
                <View style={styles.wrapper}>

                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Fade</Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Beard Shaping</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Head Shave</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Design</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Wash</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Hairstyling</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Fade</Text>

                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('../src/images/barCut.png')} />
                        <Text style={styles.textContent}>Fade</Text>

                </View>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.btn}
                    ><Text>Back</Text></Button>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ba4d4d',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    container: {
        margin:10,
        width: 135,
        height: 150,
        backgroundColor: '#333',
        justifyContent: 'center'
    },
    titleContent: {
        marginTop:20,
        alignSelf: 'center',
        fontSize: 35,
        color: '#333',
    },
    textContent:{
        alignSelf: 'center',

        color:'#808080'
    },
    btn: {
        display:'none'
    },
    image: {
        alignSelf: 'center',
        width: 125,
        height: 125
    }
});
