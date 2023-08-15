import * as React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  // Add welcome screen code here.
  return (<View>
    <Image style={styleWlcm.img}  source={require('../assets/little-lemon-logo.png')}></Image>
    <Text style={styleWlcm.wlcmTxt}>Little Lemmon,your local Mediterranean Bistro</Text>
    <Pressable style={styleWlcm.btn}>
      <Button onPress={()=> navigation.navigate("Subscribe")} title='Newsletter'></Button>
    </Pressable>
  </View>)
};

const styleWlcm = StyleSheet.create({
  container:{
    flex:1
  },
  img:{
    height:250,
    width:250,
    resizeMode:'contain',
    marginTop:100,
    marginHorizontal:50
  },
  wlcmTxt:{
    fontSize:20,
    paddingHorizontal:20,
    textAlign:"center",
    marginTop:40,
    fontWeight:'bold'
  },
  btn:{
    padding:20,
    bottom:-100
  }
})

export default WelcomeScreen;
