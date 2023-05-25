import { TouchableOpacity,Image,View,Text,StyleSheet } from 'react-native';

export default Home = ({navigation})=>{

	return ( 
      <View style={styles.container}>

	      <TouchableOpacity  onPress={()=>navigation.navigate('Splash',{})}>
	        <Image source={require('../assets/Group_1.jpg')} />
        </TouchableOpacity>

        <Text style={styles.heading}>My Track</Text>

        <View style={styles.img}>
	        <Image source={require('../assets/Rectangle_4.jpg')} />
        </View>

      </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#001D4C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    top:60,
  },
  heading:{
  color:'#fff',
  fontWeight: 600,
  fontSize: 30.606,
  lineHeight: 50
  }
})
