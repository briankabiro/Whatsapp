import React,{Component} from 'react';
import {
	View,
	Image,
	StyleSheet,
	TextInput
} from 'react-native';
//add Text Input, add background
export default class ChatScreen extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.textInput}>
					<TextInput
						placeholder="Write your message here"
					 />
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'column'
	},
	textInput:{
		alignSelf:'flex-end'
	}
})