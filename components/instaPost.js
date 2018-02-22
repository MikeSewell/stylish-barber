import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';


export default class InstaPost extends Component {
    constructor(props) {
        super(props);

        this.state = { person: [] };
    }

    componentDidMount() {
        this.UserList();
    }
    componentWillReceiveProps(){

    }
    UserList() {        
        fetch("https://styish-barber-api.herokuapp.com/v1/gallery")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log('results:',result.nodes[0].id);

                    let person =  result.nodes.map(gallery => gallery.thumbnail_src)
                    // console.log('persons state: ', persons);
                    
                    this.setState({person});
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <FlatList 
                keyExtractor={(x,i)=>i}
                data={this.state.person}
                renderItem={({item, i})=>
                    <View style={styles.container} key={i}>
                        <Image style={styles.image} source={{ uri: item }} />
                    </View>
                }
            />

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
        width: 285,
        height: 285,
        backgroundColor: '#333',
        justifyContent: 'center',
        marginBottom:5
    },
    textContent: {
        alignSelf: 'center',
        fontSize: 35,
        color: '#333',
    },
    btn: {
        display: 'none'
    },
    btnContent: {
        color: 'white'
    },
    image: {
        alignSelf: 'center',
        width: 265,
        height: 265
    }
});