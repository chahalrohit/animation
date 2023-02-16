/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs();

import Opacity from './src/Screens/Opacity';
import MyTesting1 from './src/Screens/MyTesting1';
import ScrollProgress from './src/Screens/ScrollProgress'
import AnimatedScrollHeader from './src/Screens/AnimatedScrollHeader';

AppRegistry.registerComponent(appName, () => AnimatedScrollHeader);
