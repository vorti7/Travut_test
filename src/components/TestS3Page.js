import React from 'react';
import {Platform, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import Amplify, { Auth, Storage, API, graphqlOperation } from 'aws-amplify';

import aws_config from '../aws-exports';

import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob';
import { Buffer } from "buffer";
import { RNS3 } from 'react-native-aws3';
import * as mutations from '../graphql/mutations';


console.log("\n\n*************************TestS3Page Started*************************\n\n")

Amplify.configure(aws_config);
// Login required!!
export class TestS3Page extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          putImageSource: "",
          getImageSource: "",
          imageName: ""
      };
    }
    readFile(filePath) {
      if (Platform.OS === 'ios') {
        let arr = filePath.split('/')
        const dirs = RNFetchBlob.fs.dirs
        filePath = `${dirs.DocumentDir}/${arr[arr.length - 1]}`
      }
      return RNFetchBlob.fs.readFile(filePath, 'base64').then(data => new Buffer(data, 'base64'));
    } 
    takePic(){
      ImagePicker.showImagePicker({}, (response)=>{
        console.log(response)
        this.setState({
          putImageSource: response.uri,
          imageName:response.fileName
        })

        this.readFile(response.uri).then(buffer => {
            Storage.put(response.fileName, buffer, {
                level: 'public',
                contentType: response.type
            })
        }).catch(e => {
            console.log(e);
        });
      })
    }

    
    
    takePic2(){      
        ImagePicker.showImagePicker({}, (response)=>{
          console.log(response)
          this.setState({
            putImageSource: response.uri,
            imageName:response.fileName
          })
  
          API.graphql(graphqlOperation(mutations.createPicture, { input: {
            userId: "testuser00@test.com",
            username: "testuser00",
            file: {
              bucket: aws_config.aws_user_files_s3_bucket,
              region: aws_config.aws_user_files_s3_bucket_region,
              key: response.fileName,
              uri: "https://s3.ap-northeast-1.amazonaws.com/tests3"
            }
          }}));
          
        })
    }

    getPic(){
      Storage.get(this.state.imageName, {level: 'private'})
      .then(result => {console.log('----------------------------GET----------------------------',result);
                       this.setState({
                         getImageSource: result
                       })
                      }
           )
      .catch(err => console.log(err));
    }

    getPublicPic(){
      Storage.get(this.state.imageName, {level: 'public'})
      .then(result => {console.log('----------------------------GET----------------------------',result);
                       this.setState({
                         getImageSource: result
                       })
                      }
           )
      .catch(err => console.log(err));
    }

    removePic(){
      Storage.remove('example.jpeg', {level: 'private'})
      .then(result => console.log('DEL----------------------------',result))
      .catch(err => console.log(err));
    }
    render() {

      // const putImageUri = this.state.putImageSource!=null ? this.state.putImageSource : ""
      // const getImageUri = this.state.getImageSource!=null ? this.state.getImageSource : ""

        return (
            <View style={styles.container}>
            <Image source={{uri:this.state.putImageSource}} style={{ width: 100, height: 100 }}/>
             <TouchableOpacity onPress = {this.takePic.bind(this)}>
               <Text>Take picture</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress = {this.takePic2.bind(this)}>
               <Text>Take picture(appsync)</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress = {this.getPic.bind(this)}>
               <Text>Get picture</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress = {this.getPublicPic.bind(this)}>
               <Text>Get public picture</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress = {this.removePic.bind(this)}>
               <Text>Remove picture</Text>
             </TouchableOpacity>
             <Image source={{uri:this.state.getImageSource}} style={{ width: 100, height: 100 }}/>
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
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
  });
  
  export default TestS3Page