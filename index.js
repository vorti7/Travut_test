/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// import {Navigation} from 'react-native-navigation';
// import {registerPage} from './RegisterPage';

// registerPage();

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'Login'
//       }
//     },
//   });
// });