import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Easing } from 'react-native';
import { CountryDto } from '../dtos/CountryDto';
import Home from '../screens/Home/Home';
import PhotoDetails from '../screens/PhotoDetails/PhotoDetails';

export type RootStackParamList = {
  Home: undefined;
  PhotoDetails: {
    item: CountryDto;
  };
};

export type MainStack = StackNavigationProp<RootStackParamList>;

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PhotoDetails"
          component={PhotoDetails}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
              close: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
