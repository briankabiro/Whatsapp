/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Chats from './app/components/Chats';
import Contacts from './app/components/Contacts';
import Calls from './app/components/Calls';
import ChatScreen from './app/components/ChatScreen';
import { StackNavigator } from 'react-navigation';

const MainScreenNavigator = TabNavigator({
    Calls: { screen: Calls},
    Chats: { screen: Chats },
    Contacts: {screen: Contacts}
},{
  tabBarOptions:{
    indicatorStyle:{
        backgroundColor:'white'
    },
    style:{
      backgroundColor:'teal',
    },
    initialRouteName:Chats,
  }
});

MainScreenNavigator.navigationOptions = {
  title:'Whatsapp',
}

const Whatsapp = StackNavigator({
  Home: { screen: MainScreenNavigator},  
  ChatScreen : {screen: ChatScreen}
}); 

AppRegistry.registerComponent('Whatsapp', () => Whatsapp);
