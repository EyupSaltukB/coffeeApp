import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../theme/colors';
import { View } from 'react-native';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/solid';
import { HomeIcon as HomeSolid , HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/outline';
import ProductScreen from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{headerShown: false}}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          backgroundColor: colors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}>
      <Tab.Screen name="Favorites" component={HomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == 'Home') {
    icon = focused ? 
      <HomeSolid size="30" color={colors.bgLight} />
     : 
      <HomeOutline size="30" strokeWidth={2} color="white" />
    
  } else if (route.name == 'Cart') {
    icon = focused ? 
      <BagSolid size="30" color={colors.bgLight} />
     : 
      <BagOutline size="30" strokeWidth={2} color="white" />
    
  } else if (route.name == 'Favorites') {
    icon = focused ? 
      <HeartSolid size="30" color={colors.bgLight} />
    : 
      <HeartOutline size="30" strokeWidth={2} color="white" />
    
  }

  let buttonClass = focused ? 'bg-white' : '';
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>{icon}</View>
  );
};

export default AppNavigation;
