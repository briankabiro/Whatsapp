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

const Whatsapp = TabNavigator({    
  Calls: { screen: Calls},
  Chats: { screen: Chats },
  Contacts: {screen: Contacts}
}); 

AppRegistry.registerComponent('Whatsapp', () => Whatsapp);
