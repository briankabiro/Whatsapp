import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Contacts extends Component{
		static navigationOptions = {
		tabBar: {
			label:'Contacts'
		}
	}
	render(){
		return(
			<Text>List of contacts</Text>
		)
	}
}