import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';
import List from '~/pages/Help/List';
import New from '~/pages/Help/New';
import Show from '~/pages/Help/Show';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({SignIn}),
      App: createBottomTabNavigator({
            Main,
            Help: {
              screen: createStackNavigator({
                List,
                New,
                Show,
              },
                {
                  defaultNavigationOptions: {
                    headerTitle: false,
                    headerBackground: <Header />,
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                      <Icon name="chevron-left" size={33} color="#333" />
                    )
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Help',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={22} color={tintColor} />
                ),
              },
            },
         },
      {
        resetOnBlur: true,
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#EE4E62',
          inactiveTintColor: '#999'
        },
      })
    }, {
      initialRouteName: signedIn ? 'App' : 'Sign',
    })
    );


