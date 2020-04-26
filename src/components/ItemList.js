import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
        
    function ItemList(props) {
        let time;
        time = props.item.publishedAt.split('T', 2)
        return (
            <TouchableOpacity style={styles.itemListContainer} 
            onPress={() => props.navigation.navigate('DetailedInfo', { item: props.item } )}
            >
                <View style={styles.itemContainer}>
                    <Text style={styles.listItem}>Title: {props.item.title}</Text>
                    <Text style={styles.listItem}>Author: {props.item.author.name}</Text>
                    <Text style={styles.listItem}>Summary: {props.item.body.substring(1, 25).substring(-1, 25)}...</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.listItem}>{time[0]}</Text>
                    <Text style={styles.listItem}>{time[1].substring(-1, 5)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    itemListContainer: {
        flexDirection: 'row',
        width: screenWidth - 50,
        padding: 10,
        marginTop: 15,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        borderRadius: 4,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    itemContainer: {
        height: 60,
        overflow: 'hidden'
    },
    listItem: {
        fontSize: 15, 
        color: 'black',
    },
    timeContainer: {
        alignItems: 'flex-end'
    }
})

export default ItemList;