import React,{Component} from 'react';
import {
	View,
	Image,
	StyleSheet,
	TextInput,
	Dimensions,
	ListView,
	Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
var {height, width} = Dimensions.get('window');
import InvertibleScrollView from 'react-native-invertible-scroll-view';

/*add Text Input, add background
	add send button, add photo and name of person in navbar, add keyboard
*/


const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
const convo = [];
export default class ChatScreen extends Component{
	constructor(props) {
	  super(props);
	  
	  this.state = {
	  	datasource: ds.cloneWithRows(convo),
	  	note:""
	  }
	}
	static navigationOptions = {
	  	title:({ state }) => 'Chat with'
	  };

	eachMessage(x, image){
		if(x.person == 2){
			return (
				<View style={{flexDirection:'row', alignItems:'flex-end', margin:5}}>
					<View style={{width:220, borderRadius:10, backgroundColor:"white",padding:10}}>
						<Text style={{fontSize:15, color:'#555', fontWeight:'300'}}>{x.note}</Text>
					</View>
				</View>
			)
		}else{
			return (
				<View style={{flexDirection:'row', alignSelf:'flex-end', margin:5}}>
					<View style={{width:220, borderRadius:10, backgroundColor:"#DCF8C6", padding:10}}>
						<Text style={{color:'black',fontSize:15,fontWeight:'300'}}>{x.note}</Text>
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
		convo.push({person:2, note:"Achanga za ovyo mzito"});
		this.setState({
			datasource: ds.cloneWithRows(convo.reverse())
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
					value={note}
					onChangeText={(note) => this.setState({ note})}
					onSubmitEditing ={() => this.submitThis()}
					placeholder = "Enter Your Message here"
					style={styles.textInput}
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
		backgroundColor:'white',
		width:width
	}
});

