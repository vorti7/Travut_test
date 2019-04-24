import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import aws_config from '../aws-exports';

import * as queries from '../graphql/queries';
Amplify.configure(aws_config);

// const allExtras = await API.graphql(graphqlOperation(queries.listExtraUserInfos));
export class ReadExtraInfoPage extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
            idState: '',
            nameState: '',
            genderState: ''
      };
    }
    
    render() {
      const allExtras = this.props.navigation.getParam('allExtras', 'no extras')
      return (
        <View style={styles.container}>
          <Text>Read Extra Info</Text>
          <Text>{JSON.stringify(allExtras)}</Text>
        </View>
      );
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
  
  export default ReadExtraInfoPage