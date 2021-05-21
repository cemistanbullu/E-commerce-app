import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';
import {Button} from 'react-native';

export default function Fetchsample1() {

    const [categories, setcategories] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = () => {
        fetch('https://northwind.vercel.app/api/products')
        .then((res) => res.json())
        .then((data) => {

           setcategories(data);
        })
    }

    const deleteCategory = (id) => {
        
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

    return (
        <View >
                {
                    
                    categories.slice(0,8).map((item) => (
                        <ListItem>
                        <ListItem.Content>
                            <View  style={{ flexDirection:'row', justifyContent:'space-around', backgroundColor:'yellow' }}>
                          <ListItem.Title>{item.name}</ListItem.Title>
                          <ListItem.Subtitle>{item.unitPrice + ' Türk Lirası'}</ListItem.Subtitle>
                          </View>
                          <View style={{   flexDirection: 'row', backgroundColor: 'tomato' }}>
                          <Icon name='delete' onPress={() => deleteCategory(item.id)} />
                          <Icon name='info' />
                          </View>
                        </ListItem.Content>
                      </ListItem>
                    ))
                }
        </View>
  
    )
}
