import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput, 
  Image,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BannerAd from "../src/BannerAd";

import '../assets/car.png';

function Home({ navigation }) {

  const [state, setState] = useState({
    carnumber:""
  });

  const goToScan =()=> {
    if(state.carnumber === "") {
        alert("Please Enter Vehicle Number");
    } else {
      navigation.navigate('ScanCode', {
        carID: state.carnumber
      });
    }
  }

  return (
    <View style={styles.container}>
       <View style={styles.car} >
         <Image source={require('../assets/car.png')} style={{ width: `60%`, height: 120, marginLeft:`20%` }} />
       </View>
       
       <Text style={styles.desc}>Enter your Vehicle Number</Text>
       <View style={styles.inputView} >
          <TextInput  
              style={styles.inputText}
              placeholder="ABC - 123 - 19A" 
              placeholderTextColor="#003f5c"
              onChangeText={text => setState({...state, carnumber:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={goToScan}>
            <Text style={styles.loginText} onPress={goToScan}>Scan Barcode</Text>
        </TouchableOpacity>
        <View style={{height:100,width:`100%`, display: 'flex'}}>
          <BannerAd />
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:42,
    color:"#fb5b5a",
    marginBottom:20
  },
  desc:{
      color:`#333333`,
      marginBottom:10,
      fontSize:16
  },
  car: {
    width:`80%`,
    overflow:"hidden"
  },
  inputView:{
   width:"80%",
   backgroundColor:"#bbb",
   borderRadius:25,
   height:50,
   marginBottom:0,
   justifyContent:"center",
   padding:20
 },
 inputText:{
   height:50,
   color:"#333",
   textAlign:"center"
 },
 loginBtn:{
   width:"80%",
   backgroundColor:"#fb5b5a",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   marginBottom:10
 },
 loginText:{
   color:"white"
 }
});

export default Home;