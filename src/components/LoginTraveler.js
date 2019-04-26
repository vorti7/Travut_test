import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import SignupForm from './form/SignupForm'

export class LoginTraveler extends React.Component{
    render(){
        return(
            <View>
                <SignupForm/>
            </View>
        )
    }
}

export default LoginTraveler
