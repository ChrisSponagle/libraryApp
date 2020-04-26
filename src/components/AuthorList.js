import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

    function AuthorList(props) {
        const { author } = props
        return (
            <View>
                <View>
                    <Text style={styles.listItem}>{author}</Text>
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

export default AuthorList;