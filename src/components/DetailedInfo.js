import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

function DetailedInfo(props) {
    const { item } = props.navigation.state.params
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(231, 122, 52, 0.89)', 'rgba(203, 204, 203, 0.7565)']}
                start={[0, 0.5]}
                style={styles.backgroundGradient}
            />
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => props.navigation.goBack() }>
                <Image style={styles.backArrowImg} source={require('../assets/images/backArrow.png')}/>
            </TouchableOpacity>
            <Header type={'detailed'}/>
            <View style={styles.detailedInfoContainer}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.author.name}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    backgroundGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: screenHeight,
    },
    backArrowContainer: {
      position: 'absolute',
      left: 10,
      top: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3
      
    },
    backArrowImg: {
      width: 50,
      height: 50
    },
    detailedInfoContainer: {
        width: screenWidth - 50,
        height: 500,
        padding: 15,
        marginBottom: 100,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    scrollContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 30, 
        color: '#E77A34'
    },
    author: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold'
    },
    body: {
        fontSize: 14,
        color: '#000000'
    }
  });

  export default DetailedInfo;