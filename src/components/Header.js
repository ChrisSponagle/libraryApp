import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

function Header(props) {
  
    return (
        <View style={props.type === 'mainpage' ? styles.headerMainContainer : styles.headerDetailedInfo}>
            <Image style={styles.headerLogo} source={require('../assets/images/silverorangeLogo.png')} />
            <Text style={styles.headerFont}>silverorange Library</Text>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    headerMainContainer: {
      backgroundColor: '#059BFF',
      alignItems: 'center',
      height: 200,
      width: screenWidth,
      padding: 15
    },
    headerDetailedInfo: {
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