import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Header from './src/components/Header';

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
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  }
});
