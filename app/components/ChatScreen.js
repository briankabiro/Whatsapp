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
import {GiftedChat} from 'react-native-gifted-chat';

/*add Text Input, add background
	add send button, add photo and name of person in navbar, add keyboard
*/
export default class ChatScreen extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {messages: []};
	  this.onSend = this.onSend.bind(this);
	}
	componentWillMount(){
		this.setState({
			messages:[
				{
					_id:1,
					text:'Hello developer',
					createdAt:new Date(Date.UTC(2017, 7, 30, 17, 20, 0)),
					user:{
						id: 2,
						name: 'React Native'
					},
				},
			],
		});
	}

	onSend(messages = []){
		this.setState((previousState) => {
			return{
				messages: GiftedChat.append(previousState.messages, messages)
			};
		});
	}
	render(){
		return(
			<View style={styles.container}>
				<Image source = {require('../assets/background.jpg')} style={styles.backgroundImage}>
				<View style={styles.textInput}>
					<GiftedChat
						messages={this.state.messages}
						onSend={this.onSend}
						user={{
							_id: 1
						}}
					 />
				</View>
				</Image>
			</View>
		);
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

