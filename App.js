import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  state = {
    books: ''
  }
  componentDidMount() {
  
    fetch('http://192.168.0.46:4000/posts')
      .then((response) =>  response.json())
      .then((json) => { 
        console.log("JSON", json)   
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
