import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MenuScreen from '../screens/MenuScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: styles.tabNavigationStyle,
          labelStyle: {fontSize: 14},
          tabStyle: styles.tabStyle,
          activeTintColor: '#954B4D',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={HomeScreen}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon size={30} name="home" color="#954B4D" />
              ) : (
                <Icon size={30} name="home" color="grey" />
              ),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon size={30} name="search" color="#954B4D" />
              ) : (
                <Icon size={30} name="search" color="grey" />
              ),
          }}
        />
        <Tabs.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon size={30} name="bars" color="#954B4D" />
              ) : (
                <Icon size={30} name="bars" color="grey" />
              ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabNavigationStyle: {
    height: '10%',
    backgroundColor: '#191919',
  },
  tabStyle: {
    paddingVertical: 5,
  },
});

export default Routes;
