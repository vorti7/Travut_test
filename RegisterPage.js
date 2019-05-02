import {Navigation} from 'react-native-navigation';

// import MainPage from './src/components/MainPage'
// import LoginPage from './src/components/LoginPage'
// import SignupPage from './src/components/SignupPage'
// import CreateExtraInfoPage from './src/components/CreateExtraInfoPage'
// import UpdateExtraInfoPage from './src/components/UpdateExtraInfoPage'
// import ReadExtraInfoPage from './src/components/ReadExtraInfoPage'
// import TestS3Page from './src/components/TestS3Page'

// import LoginTravelerPage from './src/components/LoginTraveler'
// import SignupTravelerPage from './src/components/SignupTraveler'
// import LoginFacebookPage from './src/components/LoginFacebook'

export function registerScreens() {
  Navigation.registerComponent('Login', (sc) => require('./src/components/LoginPage').default);
  Navigation.registerComponent('Main', () => require('./src/components/MainPage').default);
}

// const AppNavigator = createStackNavigator(
//     {
//       Main: MainPage,
//       Login: LoginPage,
//       Signup: SignupPage,
//       CreateExtraInfo: CreateExtraInfoPage,
//       UpdateExtraInfo: UpdateExtraInfoPage,
//       ReadExtraInfo: ReadExtraInfoPage,
//       TestS3: TestS3Page,
//       LoginTraveler: LoginTravelerPage,
//       SignupTraveler: SignupTravelerPage,
//       LoginFacebook: LoginFacebookPage
//     },
//     {
//       initialRouteName: "Login"
//     }
//   );
  