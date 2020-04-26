import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

function Header() {
  
    return (
        <View style={styles.headerContainer}>
            <Image style={styles.headerLogo} source={require('../assets/images/silverorangeLogo.png')} />
            <Text style={styles.headerFont}>silverorange Library</Text>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#059BFF',
      alignItems: 'center',
      height: 220,
      width: screenWidth,
      padding: 15
    },
    headerLogo: {
        height: 150,
        width: 150
    },
    headerFont: {
        fontSize: 30,
        color: '#FFF'
    }
})

export default Header;