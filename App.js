import React, { useState } from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';
import Category_add from './Category/Category_add';
import Category_list from './Category/Category_list';
import Product_list from './Product/Product_list';
import Product_detail from './Product/Product_detail';
import Order_list from './order/Order_list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './routesample/Homescreen';



export default function App() {

  const Stack = createStackNavigator();



  return (
        <NavigationContainer>

           <Stack.Navigator>

         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Products" component={Product_list} />
         <Stack.Screen name="Productdetail" component={Product_detail} />
         <Stack.Screen name="Category" component={Category_list} />
         <Stack.Screen name="addCat" component={Category_add} />
         <Stack.Screen name="order" component={Order_list} />




       </Stack.Navigator>
     </NavigationContainer>
/*
   <View>

     <Product_list></Product_list>
     

    </View>
    */
  );

}
