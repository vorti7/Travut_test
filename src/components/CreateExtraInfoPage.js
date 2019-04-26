import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_config from '../aws-exports';

import * as mutations from '../graphql/mutations';

Amplify.configure(aws_config);


export class CreateExtraInfoPage extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
            idState: '',
            nameState: '',
            genderState: ''
      };
    }
    async createExtra(){
      const extraDetails = {
          name: this.state.nameState,
          gender: this.state.genderState
      };
      const createExtraUserInfo = await API.graphql(graphqlOperation(mutations.createExtraUserInfo, {input: extraDetails}));
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Create Extra Info</Text>
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
  
          <TouchableHighlight style={styles.buttonContainer} onPress={this.createExtra.bind(this)}>
              <Text>Create!</Text>
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
  
  export default CreateExtraInfoPage