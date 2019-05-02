import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button} from 'react-native';

import Amplify, { Auth, API,graphqlOperation } from 'aws-amplify';
import aws_config from '../aws-exports';
import * as queries from '../graphql/queries';

import { getInfoTraveler } from './AuthFunction'

Amplify.configure(aws_config);


export class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    signinCheck(){
        getInfoTraveler()
    }
    signout(){
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    onPress={async () => {
                        const allExtras = await API.graphql(graphqlOperation(queries.listExtraUserInfos));
                        console.log(allExtras)
                        this.props.navigation.navigate('ReadExtraInfo',{
                            allExtras: allExtras
                        })
                    }}
                    title="Read extra Info"
                    color="#881584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('TestS3')}
                    title="Use S3"
                    color="#005984"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('CreateExtraInfo')}
                    title="Create extra Info"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('UpdateExtraInfo')}
                    title="Update extra Info"
                    color="#001584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={this.signinCheck.bind(this)}
                    title="Sign in Confirm"
                    color="#041584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={this.signout}
                    title="Sign out"
                    color="#441584"
                    accessibilityLabel="Learn more about this purple button"
                />
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
    }
  });

export default MainPage