import React from 'react';
import { I18nManager, View, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Landing from '../Screens/Landing';
import Products from '../Screens/ListProducts';
import Details from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import OrderDetails from '../Screens/OrderDetails';

const MainNav = createStackNavigator();


export const MainNavStack = (props) => {
  return (

    <MainNav.Navigator headerShown={false}>
      <MainNav.Screen
        name="Landing"
        // initialParams={{ langCode: lang }}
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <MainNav.Screen
        name="Products"
        // initialParams={{ langCode: lang }}
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      <MainNav.Screen
        name="Details"
        // initialParams={{ langCode: lang }}
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <MainNav.Screen
        name="Cart"
        // initialParams={{ langCode: lang }}
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <MainNav.Screen
        name="OrderDetails"
        // initialParams={{ langCode: lang }}
        component={OrderDetails}
        options={{
          headerShown: false,
        }}
      />
    </MainNav.Navigator>
  );
}