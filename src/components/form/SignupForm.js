import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import { Auth } from 'aws-amplify';

class SignupForm extends Component{
  constructor(props) {
      super(props);

      this.state = {
        emailState : '',
        passwordState : '',
        passwordCheckState : '',
        nameState : ''   
    };
  }
  signup(){
    if(this.state.passwordState != this.state.passwordCheckState){
      Alert.alert("Password does not match.")
    }else{
      console.log("Attempt Signup")
      Auth.signUp({
          username: this.state.emailState,
          password: this.state.passwordState,
          attributes: {
            name: this.state.nameState,
          }
      }).then(data => {Alert.alert("Signup Success");console.log(data);})
        .catch(err => Alert.alert(err.message))
    }
  }
  render(){
    return (
        <View>
            <Text>Hello! this is Signup Form!</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    textContentType='emailAddress'
                    onChangeText={(email) => this.setState({emailState: email})}/>
            </View>
    
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({passwordState: password})}/>
            </View>
    
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password again"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(passwordchk) => this.setState({passwordCheckState:passwordchk})}/>
            </View>
    
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Name"
                    underlineColorAndroid='transparent'
                    onChangeText={(name) => this.setState({nameState: name})}/>
            </View>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={this.signup.bind(this)}>
                <Text>Sign Up!</Text>
            </TouchableHighlight>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
  });

export default SignupForm