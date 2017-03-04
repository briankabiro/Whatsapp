import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');


const image1 = require('../assets/bullock.jpg');
const image2 = require('../assets/katwoman.jpg');
const image3 = require('../assets/leslie.png');
const image4 = require('../assets/deGea.jpg');
const image5 = require('../assets/martial.jpg');
const image6 = require('../assets/mata.jpg');
const image7 = require('../assets/memphis.jpg');
const image8 = require('../assets/rooney.jpg');
const image9 = require('../assets/mr_robot.jpg');

const data = [{
	"id":1,
	"first_name":"Bullock",
	"message": "I caught the goat guy",
	"image":image1
},{
	"id":2,
	"first_name":"Selina Kyle",
	"message": "I will be the cat woman",
	"image":image2
},{
	"id":3,
	"first_name":"Lee Tomkins",
	"message": "I still love Detective Gordon but mourning for Mario",
	"image":image3
},{
	"id":4,
	"first_name":"De Gea",
	"message":"Only the best keeper in the world.",
	image:image4
},{
	"id":5,
	"first_name":"Martial",
	"message":"United is my second home",
	image:image5
},{
	"id":6,
	"first_name":"Juan Mata",
	"message":"Spain and United. 100%",
	image:image6
},{
	"id":7,
	"first_name":"Memphis Depay",
	"message":"The best number seven in Holland",
	image:image7
},{
	"id":8,
	"first_name":"Wayne Rooney",
	"message":"Number 10, 9 and 8",
	image:image8
},{
	"id":9,
	"first_name":"Elliot Alderson",
	"message":"I am not a robot",
	image:image9
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
			label:'Contacts'
		}
	}
	eachMessage(x){
		return(
			<TouchableOpacity>
			<View style = {styles.profile}>
					<Image source={x.image} style = {styles.photo} />
					<View style={styles.profileDetails}>
						<Text style = {styles.name}>{x.first_name}</Text>
						<Text style = {styles.status}>{x.message}</Text>
						<View style={styles.line}></View>
					</View>
			</View>
			</TouchableOpacity>
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
		height:height/10,
		borderBottomColor:'grey',
		borderBottomWidth:1,
		marginBottom:width/50
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
	},
});


