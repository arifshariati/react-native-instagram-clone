import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
