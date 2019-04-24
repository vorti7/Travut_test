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

const AppNavigator = createStackNavigator(
  {
    Main: MainPage,
    Login: LoginPage,
    Signup: SignupPage,
    CreateExtraInfo: CreateExtraInfoPage,
    UpdateExtraInfo: UpdateExtraInfoPage,
    ReadExtraInfo: ReadExtraInfoPage,
    TestS3: TestS3Page
  },
  {
    initialRouteName: "Login"
  }
);


// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

