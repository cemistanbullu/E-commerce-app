import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';


export default function Product_detail() {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = (id) => {
        fetch('https://northwind.vercel.app/api/products/'+id)
        .then((res) => res.json())
        .then((data) => {

           setProducts(data);
        })
    }


    return (
       <View > 
        {
            products.map((item) => (
                <ListItem>
                <ListItem.Content>

                  <ListItem.Title>{item.supplierId}</ListItem.Title>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  
                </ListItem.Content>
              </ListItem>
            ))
        }

</View>

    )
}
