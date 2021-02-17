import React from 'react';
import {Image} from 'react-native';
import  {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from '../Screens/ReadStoryScreen';
import WriteStoryScreen from '../Screens/WriteStoryScreen';

const TabNavigator = createBottomTabNavigator(
    {
      ReadStory: { screen: ReadStoryScreen },
      WriteStory: { screen: WriteStoryScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({}) => {
          const routeName = navigation.state.routeName;
          if (routeName === "ReadStory") {
            return (
              <Image
                source={require("./assets/read.png")}
                style={{ width: 40, height: 40 }}
              />
            );
          } else if (routeName === "WriteStory") {
            return (
              <Image
                source={require("./assets/write.png")}
                style={{ width: 40, height: 40 }}
              />
            );
          }
        },
      }),
    }
  );