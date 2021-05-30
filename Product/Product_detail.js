import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TopBar from '../components/TopBar';

function Product_detail({ route, navigation }) {

   // const { itemid } = route.params;

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = (itemid) => {
        fetch('https://northwind.vercel.app/api/products/'+ itemid)
        .then((res) => res.json())
        .then((products) => {

           setProducts(products);
        })
    }


    return (
       <View > 
                <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{products.supplierId}</ListItem.Title>
                  <ListItem.Title>{products.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
</View>
);
}
export default Product_detail;