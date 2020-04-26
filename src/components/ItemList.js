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
                    <View style={styles.listView}>
                        <Text style={styles.listTitle}>Title: </Text>
                        <Text style={styles.listItem}>{props.item.title}</Text>
                    </View>
                    <View style={styles.listView}>
                        <Text style={styles.listTitle}>Author: </Text>
                        <Text style={styles.listItem}>{props.item.author.name}</Text>
                    </View>
                    <View style={styles.listView}>
                        <Text style={styles.listTitle}>Summary: </Text>
                        <Text style={styles.listItem}>{props.item.body.substring(1, 18).substring(-1, 16)}...</Text>
                    </View>
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
        elevation: 5, //For Android
        shadowColor: '#000', //For iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    itemContainer: {
        height: 60,
        width: 220,
        overflow: 'hidden'
    },
    listView: {
        flexDirection: 'row'
    },
    listTitle: {
        fontSize: 15, 
        color: 'black',
        fontWeight: 'bold'
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