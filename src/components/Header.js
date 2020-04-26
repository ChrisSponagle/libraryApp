import React from 'react';
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

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#059BFF',
      alignItems: 'center',
      height: 200,
      width: screenWidth,
      padding: 15
    },
    headerLogo: {
        height: 130,
        width: 130
    },
    headerFont: {
        fontSize: 30,
        color: '#FFF'
    }
})

export default Header;