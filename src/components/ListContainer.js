import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AuthorList from './AuthorList';
import ItemList from './ItemList';

export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        
        this.renderBooks = this.renderBooks.bind(this);
        this.renderAuthors = this.renderAuthors.bind(this);
    }

    renderAuthors = (bookData) => {
        let authors = []
        bookData.map((item, index) => {
            authors.push(item.author.name) 
        })
        const onlyAuthors = [...new Set(authors)]
        return onlyAuthors.map((item, index) => {
            return (
                <AuthorList author={item} />
            )
        })
    }

    renderBooks = (bookData) => {
        return bookData.map((item, index) => {
            return (
             <ItemList item={item} />
            )
        })
    }
    render() {
        return (
            <View style={styles.listContainer}>
                {this.renderAuthors(this.props.bookData)}
                {this.renderBooks(this.props.bookData)}
            </View>
        );
    }
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        width: screenWidth
    }
});
    