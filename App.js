import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Header from './src/components/Header';
import ListContainer from './src/components/ListContainer';

export default class App extends Component {

  state = {
    bookData: []
  }
  componentDidMount() {
  
    fetch('http://192.168.0.46:4000/posts')
      .then((response) =>  response.json())
      .then((json) => { 
        this.setState({bookData: json})  
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { bookData } = this.state
    return (
      <View style={styles.container}>
        <Header />
        <ListContainer bookData={bookData}/>
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
