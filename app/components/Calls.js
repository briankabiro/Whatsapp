import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Calls extends Component{
	static navigationOptions = {
		tabBar: {
			label:'Calls'
		}
	}	
	render(){
		return(
			<Text>List contacts go here</Text>
		)
	}
}