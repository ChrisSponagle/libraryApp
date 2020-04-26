import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

function DetailedInfo(props) {
    const { item } = props.navigation.state.params
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => props.navigation.goBack() }>
                <Image style={styles.backArrowImg} source={require('../assets/images/backArrow.png')}/>
            </TouchableOpacity>
            <Header type={'detailed'}/>
            <View style={styles.detailedInfoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author.name}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E77A34',
      alignItems: 'center',
    },
    backArrowContainer: {

    },
    backArrowImg: {

    },
    detailedInfoContainer: {

    },
    title: {
        fontSize: 25, 
        color: '#E77A34'
    },
    author: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold'
    },
    body: {
        fontSize: 14,
        color: '#000000'
    }
  });

  export default DetailedInfo;