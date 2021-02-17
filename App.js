import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


  const switchNavigator = createSwitchNavigator({
    ReadStoryScreen:{screen:ReadStory},
    WriteStoryScreen:{screen:WriteStory}
  })
  const AppContainer = createAppContainer(switchNavigator);