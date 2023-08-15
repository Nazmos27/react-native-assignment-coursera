import * as React from 'react';
import { Alert, Button, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {validateEmail} from "../utils/index"

const SubscribeScreen = () => {

  const [email, onChangeEmail] = React.useState("")
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={subStyles.container}>
      <Image style={subStyles.img} source={require("../assets/little-lemon-logo-grey.png")}></Image>
      <Text style={subStyles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        keyboardType="email-address"
        style={subStyles.input}
        placeholder='Your Email'
        value={email}
        onChangeText={onChangeEmail}
      ></TextInput>
      <Pressable style={subStyles.btn}  >
        <Button disabled={validateEmail(email) ? false : true} onPress={() => Alert.alert("Thanks For Sunscribing,Stay Tuned!")} color={"green"} title='Subscribe'></Button>
      </Pressable>
    </KeyboardAvoidingView>

  );
};
const subStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',

  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: 300,
    fontWeight: 'bold',
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  btn:{
    width:300,
    margin:20,
    
    
  }
})

export default SubscribeScreen;
