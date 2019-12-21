import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ServiceRequest from './ServiceRequest';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask('ServiceRequest', () => ServiceRequest);
