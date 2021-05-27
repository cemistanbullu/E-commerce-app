import React, { useState, useEffect } from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

function Order_list({ route, navigation }) {
  
    const [orders, setorders] = useState([]);

  useEffect(() => {
    fillData();
  }, []);

 

  const fillData = () => {
    fetch('https://northwind.vercel.app/api/orders')
      .then((res) => res.json())
      .then((orders) => {
        setorders(orders);
      });
  };

  return (
    

      <View>
        {orders.slice(0,8).map((detail) => (
          <View>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>
                  Customer: {detail.customerId}
                </ListItem.Title>
                <ListItem.Subtitle>
                  Order date: {detail.orderDate}
                  
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                Shipped Date: {detail.shippedDate}
                </ListItem.Subtitle>

              </ListItem.Content>
            </ListItem>
          </View>
        ))}
      </View>
     
  );
}


export default Order_list;