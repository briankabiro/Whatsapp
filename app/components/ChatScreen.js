import React,{Component} from 'react';
import {
	View,
	Image,
	StyleSheet,
	TextInput,
	Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
var {height, width} = Dimensions.get('window');
/*add Text Input, add background
	add send button, add photo and name of person in navbar, add keyboard
*/
export default class ChatScreen extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image source = {require('../assets/background.jpg')} style={styles.backgroundImage}>
				<View style={styles.textInput}>
					<TextInput
						placeholder="Write your message here"
					 />
				</View>
				</Image>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	backgroundImage:{
		flexDirection:'row',
		flex:1
	},
	textInput:{
		alignSelf:'flex-end',
		width:width,
		backgroundColor:'white'
	}
});

