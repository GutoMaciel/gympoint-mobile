import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

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
              },{
                defaultNavigationOptions: {
                  header: <Header />,
                  headerStyle: {
                    marginTop: 30,
                  }
                },
              }),
              navigationOptions: {
                tabBarLabel: 'Help'
              }
            },
         },
      {
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


