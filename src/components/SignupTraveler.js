import React, { Component } from 'react';
import {View} from 'react-native';
import SignupForm from './form/SignupForm'

export class SignupTraveler extends Component{
    render(){
        return(
            <View>
                <SignupForm/>
            </View>
        )
    }
}

export default SignupTraveler
