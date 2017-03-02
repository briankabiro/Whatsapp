import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image
} from 'react-native';
import Contacts from './Contacts';
import Calls from './Calls';

var {height, width} = Dimensions.get('window');

/*
	Fix tab navigator
	Add gotham people photos
	getMockups to design from
	Add more people
	change navigator and tint color
 */

const image1 = require('../assets/bullock.jpg');
//const image2 = require('../assets/gordon.jpg');
const image3 = require('../assets/katwoman.jpg');
const image4 = require('../assets/leslie.png');
//const image5 = require('../assets/wayne.jpg');
//const image6 = require('../assets/penguin.jpg');

const data = [{
	"id":1,
	"first_name":"Bullock",
	"message": "I caught the goat guy",
	"image":image1
},{
	"id":3,
	"first_name":"Selina Kyle",
	"message": "I will be the cat woman",
	"image":image3
},{
	"id":4,
	"first_name":"Lee Tomkins",
	"message": "I still love Detective Gordon but mourning for Mario",
	"image":image4
}]

const ds = new ListView.DataSource({ rowHasChanged:(r1,r2) => r1 !== r2 });

export default class Chats extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	dataSource:ds.cloneWithRows(data)
	  };
	}
	static navigationOptions = {
		tabBar: {
			label:'Chats'
		}
	}
	eachMessage(x){
		return(
			<View style = {styles.profile}>
					<Image source={x.image} style = {styles.photo} />
					<View style={styles.profileDetails}>
						<Text style = {styles.name}>{x.first_name}</Text>
						<Text style = {styles.status}>{x.message}</Text>
					</View>
			</View>
		)
	}
	render(){
		return(
			<View style = {styles.container}>
			<ListView 
				dataSource={this.state.dataSource}
				renderRow={(rowData) => this.eachMessage(rowData)}
			/>	
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
	heading:{
		flexDirection:'row',
		justifyContent:'space-between',
		height:height/12,
		backgroundColor:'#34af23'
	},
	headerText:{
		color:'white'
	},
	profile:{
		flexDirection:'row',
		width:width,
		height:height/10
	},
	photo:{
		height:height/12,
		width:height/12,
		borderRadius:100,
		alignSelf:'center',
		marginLeft:width/20
	},
	profileDetails:{
		flexDirection:'column',
		justifyContent:'center',
		paddingLeft:width/20
	},
	name:{
		fontWeight:'100',
		color:'black'
	}
});


