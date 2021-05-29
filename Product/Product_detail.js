import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function Product_detail({ route, navigation }) {
   /* const { id } = route.params;

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
    }*/

const { id } = route.params;

const [products, setProducts] = useState({});

useEffect(() => {
  fetch('https://northwind.vercel.app/api/products/' + id)
    .then((res) => res.json())
    .then((products) => {
      setProducts(products);
    });
}, []);

    return (
      /* <View > 
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
*/

<View>


                <TextInput>dfv</TextInput>
          
        

</View>
);
}
    

export default Product_detail;