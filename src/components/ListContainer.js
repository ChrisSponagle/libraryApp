import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import AuthorList from './AuthorList';
import ItemList from './ItemList';

export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            bookData: [],
            selectedAuthor: ''
        }
        
        this.renderBooks = this.renderBooks.bind(this);
        this.renderAuthors = this.renderAuthors.bind(this);
        this.filterAuthor = this.filterAuthor.bind(this);
    }

    componentDidMount() {
        this.setState({
            bookData: this.props.bookData
        })
    }

    filterAuthor(selectedAuthor) {
        let filteredAuthor = []
        this.props.bookData.map((item, index) => {
            selectedAuthor === "All" ? filteredAuthor.push(item) :
            item.author.name === selectedAuthor?
            filteredAuthor.push(item) : null
        })
        this.setState({bookData: filteredAuthor})
        this.renderAuthors(this.state.bookData, selectedAuthor)
    }

    renderAuthors = (bookData, selectedAuthor) => {
        selectedAuthor !== undefined && this.setState({selectedAuthor: selectedAuthor})
        let authors = ['All']
        bookData.map((item, index) => {
            authors.push(item.author.name) 
        })
        const uniqueAuthors = [...new Set(authors)]
        const sortedAuthors = uniqueAuthors.sort()
        return sortedAuthors.map((item, index) => {
            return (
                <AuthorList key={index} author={item} filterAuthor={this.filterAuthor} selectedAuthor={this.state.selectedAuthor}/>
            )
        })
    }

    renderBooks = (bookData) => {
        bookData.sort((a,b) => (a.publishedAt < b.publishedAt) ? 1 : ((b.publishedAt < a.publishedAt) ? -1 : 0)); 
        return bookData.map((item, index) => {
            return (
             <ItemList key={index} item={item} navigation={this.props.navigation} />
            )
        })
    }
    render() {
        const { bookData }= this.state
        return (
            <View style={styles.listContainer}>
                <View style={styles.authorContainer}>
                    {this.renderAuthors(this.props.bookData)}
                </View>
                <ScrollView contentContainerStyle={styles.itemContainer}>
                    {this.renderBooks(bookData)}
                </ScrollView>
            </View>
        );
    }
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignItems: 'center',
        width: screenWidth
    },
    authorContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 10,
        borderBottomWidth: 1,
        elevation: 5, //For Android
        shadowColor: '#000', //For iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    itemContainer: {
        paddingBottom: 20,
        width: screenWidth,
        alignItems: 'center'
    }
});
    