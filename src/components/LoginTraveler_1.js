import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import LoginForm from './form/LoginForm'

export class LoginTraveler_1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          emailState : '',
          passwordState : ''
      };
    }
    async signin(){
        // Auth.signIn(this.state.emailState, this.state.passwordState)
        //     .then(success => {Alert.alert('successful sign in');
        //     this.props.navigation.navigate('Main')})
        //     .catch(err => console.log(err));
    }

    // setEmailState(){

    // }
    // setPwdState(){

    // }
    
    render(){
        return(
            <View>
                <LoginForm
                    
                />
                <TouchableHighlight style={styles.buttonContainer} onPress={this.signin.bind(this)}>
                    <Text>Sign In!</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.push('SignupTraveler')}>
                    <Text>Sign Up!</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    }
  });

export default LoginTraveler_1
