import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'



const Detail = ({navigation}) => {
	const picture = navigation.getParam('picture');
	const name = navigation.getParam('name');
	const gender = navigation.getParam('gender');
	const address = navigation.getParam('address');
	const company = navigation.getParam('company');
	const film = navigation.getParam('filmName');
	const genderr = gender === 'male' ? 'He' : 'She';
	const genderProNoun = gender === 'male' ? 'His' : 'Her'
	const genderTitle = gender === 'male' ? 'Male' : 'Female';

	return(
		<View style={styles.container}>
			<Image style={styles.image} source={{uri: picture}} />
			<View style={styles.textContainer}>
			<Text style={styles.text}>{name + ' is ' + genderTitle}</Text> 
			<Text style={styles.text}>{genderr + ' lives at ' + address + '.'}</Text> 
			<Text style={styles.text}>{genderr + ' works at ' + company + '.'}</Text> 
			<Text style={styles.text}>{genderProNoun + ' favourite film is ' + film + '.'} </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
		container: { 
		    flex: 1,
		    paddingTop:20,
		    alignItems: 'center'
		},

		image: {
			height:200,
			width:200,
			borderRadius:60,
			marginBottom: 10
		},


		text: {
			fontSize: 20, 
			marginVertical: 5
		}
});



Detail.navigationOptions = ({navigation}) => {
	const name = navigation.getParam('name');

	return {
		title: name,
		headerStyle: {
		    backgroundColor: '#2a3daa'
		},
		headerTintColor: '#ffffff'
		}
	}

export default Detail

