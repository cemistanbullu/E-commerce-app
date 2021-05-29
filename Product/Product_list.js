import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';
import {Button} from 'react-native';

export default function Product_list({ navigation }) {

    const [products, setproducts] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = () => {
        fetch('https://northwind.vercel.app/api/products')
        .then((res) => res.json())
        .then((data) => {

           setproducts(data);
        })
    }

    const deleteProduct = (id) => {
        
        let requestoptions = {
            method : 'DELETE',
            body: JSON.stringify({id:id})
        }

        fetch('https://northwind.vercel.app/api/products/' + id, requestoptions)
            .then((res) => res.json ())
            .then((data) => {
                 fillData(data);
        })
        .then((res)=> {
            alert('Product ID -> ' + id + ' is Deleted!!');
        })

    }

    const gotoDetailPage = (id)=>{

        navigation.navigate('Productdetail', 'https://northwind.vercel.app/api/products/' + id)

    }
    
    return (
        <View >
                {
                    
                    products.slice(0,8).map((item) => (
                        <ListItem>
                        <ListItem.Content>
                            <View>
                          <ListItem.Title>{item.name}</ListItem.Title>
                          <ListItem.Subtitle>
                          Price: {item.unitPrice}$
                          </ListItem.Subtitle>  
                          <ListItem.Subtitle>
                          Quantity Per Unit: {item.quantityPerUnit} 
                          </ListItem.Subtitle>  
                          <ListItem.Subtitle>
                          Stock in: {item.unitsInStock}
                          </ListItem.Subtitle>
                                     </View>
                          <View >
                          <Icon name='delete' onPress={() => deleteProduct(item.id)} />
                          <Icon name='info' onPress={() => gotoDetailPage(item.id)}/>
                          </View>
                        </ListItem.Content>
                      </ListItem>
                    ))
                }
        </View>
  
    )
}
