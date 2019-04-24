import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button} from 'react-native';

import Amplify, { Auth } from 'aws-amplify';


export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
          emailState : '',
          passwordState : ''
      };
    }
    async signin(){
        Auth.signIn(this.state.emailState, this.state.passwordState)
            .then(success => {Alert.alert('successful sign in');
            this.props.navigation.navigate('Main')})
            .catch(err => console.log(err));
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>This is Sign in page</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({emailState: email})}/>
                </View>
        
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({passwordState: password})}/>
                </View>
                <TouchableHighlight style={styles.buttonContainer} onPress={this.signin.bind(this)}>
                    <Text>Sign In!</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.push('Signup')}>
                    <Text>Sign Up!</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
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

export default LoginPage