import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
const image1 = require('../assets/leslie.png');
const image2 = require('../assets/deGea.jpg');
import Icon from 'react-native-vector-icons/MaterialIcons';
// Material Icons - Call made, call received
const data = [{
	"id":1,
	"first_name":"Lee Tomkins",
	"time": "Today, 19:30",
	"image":image1,
	"call":"call-made",
	"color":"teal"
},{
	"id":2,
	"first_name":"David deGea",
	"time": "Jana, 12:03",
	"image":image2,
	"call":"call-received",
	"color":"red"
}];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Calls extends Component{
	static navigationOptions = {
		tabBar: {
			label:'Calls'
		}
	}	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	dataSource:ds.cloneWithRows(data)
	  };
	}
	eachCall(x){
		return(
			<View style={styles.callView}>
				<View style={styles.leftSide}>
					<Image style={styles.personImage} source={x.image} />
					<View style={styles.callDetails}>
						<Text style={styles.personName}>{x.first_name}</Text>
						<View style={styles.lowerCallDetails}>
							<Icon style={styles.callStatus} name = {x.call} size={12} color={x.color} />
							<Text>{x.time}</Text>
						</View>
					</View>
				</View>
				<Icon name = "local-phone" size={20} color="teal"/>
			</View>
		)
	}
	render(){
		return(
			<View style={styles.container}>
				<ListView 
					dataSource={this.state.dataSource}
					renderRow={(rowData) => this.eachCall(rowData)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		flex:1
	},
	callView:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		margin:10
	},
	leftSide:{
		flexDirection:'row'
	},
	callDetails:{
		justifyContent:'center',
		marginLeft:10
	},
	personImage:{
		height:50,
		width:50,
		borderRadius:100
	},
	lowerCallDetails:{
		flexDirection:'row',
		alignSelf:'flex-end'
	},
	personName:{
		color:'black',
	},
	callStatus:{
		marginRight:2
	}
})