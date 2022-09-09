import * as React from 'react';
import { ActivityIndicator, Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Row, Table } from 'react-native-table-component';

function Result({ route, navigation }) {

  var current = new Date();

  const { itemId, otherParam } = route.params;
  const [state, setState] = React.useState({
    loader:true,
    time:current.toLocaleTimeString(),
    date:current.toLocaleDateString()
  });

  React.useEffect( ()=>{
    setTimeout(() => {
      setState({...state, loader:false});
    }, 2000);
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {
        state.loader == true ?
        <ActivityIndicator size="large" color="#333333" /> : 
        <>
        <View style={state.hide}>
          <View style={styles.w100}>
            <View style={styles.bleft}><Text>Vehicle:</Text></View>
            <View style={styles.bright}><Text>{JSON.stringify(itemId)}</Text></View>
          </View>
          <View style={styles.w100}>
            <View style={styles.bleft}><Text>Scan Data:</Text></View>
            <View style={styles.bright}><Text>{JSON.stringify(otherParam)}</Text></View>
          </View>
          <View style={styles.w100}>
            <View style={styles.bleft}><Text>Delivery Time:</Text></View>
            <View style={styles.bright}><Text>{state.time}</Text></View>
          </View>
          <View style={styles.w100}>
            <View style={styles.bleft}><Text>Delivery Date:</Text></View>
            <View style={styles.bright}><Text>{state.date}</Text></View>
          </View>
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        </>
      }
      
    </View>
  );
}


const styles = StyleSheet.create({
  w100:{
    flexDirection: 'row',
    alignItems: 'center' ,
    marginBottom:10
  },
  bleft: { 
    minHeight: 60,
    width: '35%',
    backgroundColor: '#BAEFBE',
    padding:15,
    fontWeight:"700",
  },
  text: { 
    textAlign: 'center'
  },
  bright: { 
    minHeight: 60, 
    width: '65%',
    backgroundColor: '#F6F7Fb',
    textAlign:'right',
    alignItems: 'flex-end' ,
    padding:15,
  }
});

export default Result;

