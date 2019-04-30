import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button} from 'react-native';

import { Auth } from 'aws-amplify';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
          emailState : '',
          passwordState : ''
      };
    }
    // async signin(){
    //     Auth.signIn(this.state.emailState, this.state.passwordState)
    //         .then(success => {Alert.alert('successful sign in');
    //         this.props.props.navigation.navigate('Main')})
    //         .catch(err => console.log(err));
    // }
    render(){
        return(
            <View>
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

export default LoginForm