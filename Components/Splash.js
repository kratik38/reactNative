import {View,Image,Text,StyleSheet, TouchableOpacity} from 'react-native';


export default Splash = ()=>{

	return (
		<View style={styles.container}>
			<TouchableOpacity>
			<View style={styles.textView}>
				<Text style={styles.text}>Skip</Text>

			 <View style={{top:6}}>
				<Image source={require('../assets/arrow-right.jpg')}/>
			 </View>
	    </View>
			</TouchableOpacity>

		<View style={styles.img}>
			<Image source={require('../assets/Group.jpg')}/>
		</View>

		<View style={styles.bottomContainer}>
			<Text style={styles.bottomTextHeading}>Welcome To My Spy</Text>
			<View style={{padding:40}}>
			<Text style={styles.bottomTextPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has </Text>
	    </View>
			</View>
			<View style={{position:'absolute',bottom:50,left:180}}>
				<Image source={require('../assets/Group_s.jpg')}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff'
	},
	bottomContainer:{
		position:'absolute',
		width:500,
		height:400,
		top:500,
		borderRadius:100,
		backgroundColor:'#001D4C'
	},
	bottomTextHeading:{
		color:'#fff',
		position:'absolute',
		left:100,
		top:50,
		fontSize:25,
		fontWeight:700,
	},
	bottomTextPara:{
		color:'#fff',
		position:'absolute',
		top:130,
		left:20,
		fontSize:20,
		fontWeight:400,
	},
	textView:{
		flex:1,
		flexDirection:'row',
		position:'absolute',
		width: 45,
		height: 24,
		left: 350,
		top: 50,
	},
	text:{
		fontWeight: 400,
		fontSize: 16,
		lineHeight: 24,
	},
	img:{
	flex:1,
	alignItems:'center',
	top:150,
	},

})