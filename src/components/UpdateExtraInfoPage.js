import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import aws_config from '../aws-exports';

import * as mutations from '../graphql/mutations';

Amplify.configure(aws_config);


export class UpdateExtraInfoPage extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
            idState: '',
            nameState: '',
            genderState: ''
      };
    }
    async updateExtra(){
        const extraDetails = {
            id: this.state.idState,
            name: this.state.nameState,
            gender: this.state.genderState
        };
        const updateExtraUserInfo = await API.graphql(graphqlOperation(mutations.updateExtraUserInfo, {input: extraDetails}));
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Update Extra Info</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="id"
                underlineColorAndroid='transparent'
                onChangeText={(id) => this.setState({idState: id})}/>
          </View>
  
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="name"
                underlineColorAndroid='transparent'
                onChangeText={(name) => this.setState({nameState: name})}/>
          </View>
  
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="gender"
                underlineColorAndroid='transparent'
                onChangeText={(gender) => this.setState({genderState: gender})}/>
          </View>
  
          <TouchableHighlight style={styles.buttonContainer} onPress={this.updateExtra.bind(this)}>
              <Text>Update!</Text>
          </TouchableHighlight>
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
  
  export default UpdateExtraInfoPage