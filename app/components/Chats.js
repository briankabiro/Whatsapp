import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Contacts from './Contacts';
import Calls from './Calls';

var {height, width} = Dimensions.get('window');

/*
	Fix tab navigator
	Add gotham people photos
 */

export default class Chats extends Component{
	static navigationOptions = {
		tabBar: {
			label:'Chats'
		}
	}
	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.profile}>
					<View style = {styles.photo}></View>
					<View style={styles.profileDetails}>
						<Text style = {styles.name}>Bullock</Text>
						<Text style = {styles.status}>What hurts more, the pain of hard work</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	profile:{
		flexDirection:'row',
		borderColor:'black',
		borderWidth:2,
		justifyContent:'space-around',
		width:width,
		height:height/10
	},
	photo:{
		height:height/12,
		width:height/12,
		backgroundColor:'black',
		borderRadius:100,
		alignSelf:'center'
	},
	profileDetails:{
		flexDirection:'column',
		justifyContent:'center'
	},
	name:{
		fontWeight:'bold'
	}
});

const MainScreenNavigator = TabNavigator({
	Home: {screen:Chats},
	Calls:{ screen:Calls },
	Contacts:{ screen:Contacts}
});