import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableHighlight, FlatList, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Detail from './Detail';
import ContactData from '../Data/ContactData.json';

class List extends Component { 
	renderItem({item}) {
		return <TouchableHighlight onPress={() => this.onPress(item)} underlayColor="#e4e4e4" style={styles.listButton}>
		<View style={styles.view}>
			<Image style={styles.image} source={{uri: item.picture}} />
			<View style={styles.listBox}>
			<Text style={styles.list}>{item.name}</Text>
			<Text style={styles.company}>{item.company}</Text>
			</View>
		</View>
		</TouchableHighlight>
	}

	renderSeparator() {
    	return <View style={styles.renderSeparator} />;
 	}

	keyExtractor(item, index) {
    	return `${index}`;
  	}

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.renderSeparator = this.renderSeparator.bind(this);
	}

	onPress(item) {
   		this.props.navigation.navigate('Detail', {
		id: item.id,
		name: item.name,
		gender: item.gender,
		picture: item.picture,
		address: item.address,
		company: item.company,
		filmName: item.filmName
  		})
	}

	render() {
		return(
			<View>
				<FlatList ItemSeparatorComponent={this.renderSeparator} data={ContactData} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: { 
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	    padding:30,
	},

	label: { 
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white'
	}, 

	listButton: {
		flex: 1,
	    justifyContent: 'center',
	    paddingLeft: 10,
		paddingRight: 10
	},

	image: {
		width:50,
		height: 50,
		borderRadius: 30
	},

	renderSeparator: { 
		height: 1, 
		backgroundColor: '#ddd',
		marginLeft:10
	},

	list: {
		fontSize: 18
	},

	listBox: {
		flex: 1,
		padding: 15
	},

	view:{
		flexDirection: 'row'
	},

	company: {
		color:"gray"
	}
});

List.navigationOptions = {
	title: 'Contacts',
	headerStyle: {
		backgroundColor: '#2a3daa'
	},
	headerTintColor: '#ffffff'
}


StatusBar.setBarStyle('light-content');

export default List



