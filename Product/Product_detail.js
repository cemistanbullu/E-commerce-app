import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';


function Product_detail({ route, navigation }) {
    const { id } = route.params;

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = (id) => {
        fetch('https://northwind.vercel.app/api/products/'+id)
        .then((res) => res.json())
        .then((products) => {

           setProducts(products);
        })
    }
/*
const { itemId } = route.params;

const [product, setproduct] = useState({});

useEffect(() => {
  fetch('https://northwind.vercel.app/api/products/' + itemId)
    .then((res) => res.json())
    .then((product) => {
      setproduct(product);
    });
}, []);
*/
    return (
       <View > 
        {products.map((item) => (
                <ListItem>
                <ListItem.Content>

                  <ListItem.Title>{item.supplierId}</ListItem.Title>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  
                </ListItem.Content>
              </ListItem>
            ))
        }

</View>

);
}
    

export default Product_detail;