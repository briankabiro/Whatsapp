import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class RecentChatsScreen extends Component {
	render() {      
		return <Text>List of recent chats</Text>    
	}
} 

class AllContactsScreen extends Component {
  render() {
     return <Text>List of all contacts</Text>    
}} 

const MainScreenNavigator = TabNavigator({    
	Recent: { screen: RecentChatsScreen },
	All: { screen: AllContactsScreen },
 }); 