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
                            <View  style={{ flexDirection:'row', justifyContent:'space-around', backgroundColor:'yellow' }}>
                          <ListItem.Title>{item.name}</ListItem.Title>
                          <ListItem.Subtitle>{item.unitPrice + ' Türk Lirası'}</ListItem.Subtitle>
                          </View>
                          <View style={{   flexDirection: 'row', backgroundColor: 'tomato' }}>
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
