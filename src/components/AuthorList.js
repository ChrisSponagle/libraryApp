import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Alert } from 'react-native'

    export default class AuthorList extends PureComponent {
        constructor(props) {
            super(props);
            
            this.state={
                selectedAuthor: 'All'
            }    
        }

        componentDidUpdate() {
            this.setState({selectedAuthor: this.props.selectedAuthor})
        }
   
        render() {
        const { author, selectedAuthor } = this.props
            return (
                <TouchableOpacity onPress={() => this.props.filterAuthor(author)} style={author === this.state.selectedAuthor ? styles.activeAuthorItem : styles.inActiveAuthorItem}>
                    <Text style={styles.listItem}>{author}</Text>
                </TouchableOpacity>
            )
        }
    }

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    activeAuthorItem: {
        backgroundColor: '#18A0FB',
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4,
        width: screenWidth/2.5,
        alignItems: 'center',
        margin: 5
    },
    inActiveAuthorItem: {
        backgroundColor: '#BFBFBF',
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4,
        width: screenWidth/2.5,
        alignItems: 'center',
        margin: 5
    },
    listItem: {
        fontSize: 15, 
        color: '#FFF'
    }
})