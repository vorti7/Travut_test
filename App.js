/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainPage from './src/components/MainPage'
import LoginPage from './src/components/LoginPage'
import SignupPage from './src/components/SignupPage'
import CreateExtraInfoPage from './src/components/CreateExtraInfoPage'
import UpdateExtraInfoPage from './src/components/UpdateExtraInfoPage'
import ReadExtraInfoPage from './src/components/ReadExtraInfoPage'
import TestS3Page from './src/components/TestS3Page'

import LoginTravelerPage from './src/components/LoginTraveler'
import SignupTravelerPage from './src/components/SignupTraveler'
import LoginFacebookPage from './src/components/LoginFacebook'


const AppNavigator = createStackNavigator(
  {
    Main: MainPage,
    Login: LoginPage,
    Signup: SignupPage,
    CreateExtraInfo: CreateExtraInfoPage,
    UpdateExtraInfo: UpdateExtraInfoPage,
    ReadExtraInfo: ReadExtraInfoPage,
    TestS3: TestS3Page,
    LoginTraveler: LoginTravelerPage,
    SignupTraveler: SignupTravelerPage,
    LoginFacebook: LoginFacebookPage
  },
  {
    initialRouteName: "LoginTraveler"
  }
);


// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

