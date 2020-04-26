import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
        
    function ItemList(props) {
        const { item } = props
        return (
            <View>
                <View>
                    <Text style={styles.listItem}>Title: {item.title}</Text>
                    <Text style={styles.listItem}>Author: {item.author.name}</Text>
                    <Text style={styles.listItem}>Summary: </Text>
                </View>
                <View>
                    <Text style={styles.listItem}>{item.publishedAt}</Text>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    listItem: {
        fontSize: 20, 
        color: 'black'
    }
})

export default ItemList;