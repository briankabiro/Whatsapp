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
const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
const convo = [];
export default class ChatScreen extends Component{
	constructor(props) {
	  super(props);
	  static navigationOptions = {
	  	title:({ state }) => 'Chat with ${state.params.user}'
	  };
	  this.state = {
	  	datasource: ds.cloneWithRows(convo),
	  	note:""
	  }
	}

	eachMessage(x, image){
		if(x.person == 2){
			return (
				<View>
					<View>
						<Text>{x.note}</Text>
					</View>
				</View>
			)
		} else{
			return (
				<View>
					<View>
						<Text>{x.note}</Text>
					</View>
				</View>
			)
		}
	}

	submitThis(){
		convo.push({
			person:1,
			note: this.state.note
		});
		this.setState({
			datasource: ds.cloneWithRows(convo.reverse()),
			note:''
		})
		setTimeout(() => {
			this.simulator();
		}, 2000);
	}

	simulator(){
		convo.reverse();
		convo.push({person:2, note:"Achanga za ovyo mzito"})
		this.setState({
			datasource:ds.cloneWithRows(convo.reverse());
		})
	}

	render(){
		const {note} = this.state;
		return(
			<Image source = {require('../assets/background.jpg')} style={styles.container}>
				<ListView 
					enableEmptySections = {true}
					renderScrollComponent = {props => <InvertibleScrollView {...props} inverted />}
					noScroll = {true}
					style={{flex:1}}
					contentContainerStyle={{ justifyContent:'flex-end'}}
					dataSource = {this.state.datasource}
					renderRow = {(rowData) => this.eachMessage(rowData)}
				/>
				<View style={styles.textInput}>
				<TextInput 
					style={{flex:1}}
					value={note}
					onChangeText={(note) => this.setState({ note})}
					onSubmitEditing ={() => this.submitThis()}
					placeholder = "Enter Your Message here"
				/>	
				</View>
			</Image>
		);
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		width:null,
		height:null
	},
	textInput:{
		alignSelf:'flex-end',
		width:width,
		backgroundColor:'white'
	}
});

