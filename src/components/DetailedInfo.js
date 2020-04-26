import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

function DetailedInfo(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backArrowContainer}>
                <Image style={styles.backArrowImg} source={require('../asset/images/backArrow.png')}/>
            </TouchableOpacity>
            <Header type={'detailed'}/>
            <View style={styles.detailedInfoContainer}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.author}>{props.item.author.name}</Text>
                <Text style={styles.body}>{props.item.body}</Text>
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