import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Login({ navigation }) {
  
  const [state, setState] = useState({
    email:"",
    password:""
  });
  
  const loginPress =()=> {
    if(state.email === "") {
        alert("Please Enter Email Address");
    } else if(state.password === "") {
      alert("Please Enter Login Password");
    } else {
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login Page</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username" 
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({...state, email:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password ..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({...state, password:text})}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={loginPress}>
        <Text style={styles.loginText} onPress={loginPress}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:42,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});