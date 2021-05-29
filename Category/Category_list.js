import React, { useState, useEffect } from 'react';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager,View, Text, StyleSheet,Button,Alert} from 'react-native';


export default function Category_list({ navigation }) {
 

    const [categories, setcategories] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = () => {
        fetch('https://northwind.vercel.app/api/categories')
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

        fetch('https://northwind.vercel.app/api/categories/' + id, requestoptions)
            .then((res) => res.json ())
            .then((data) => {
                 fillData(data);
        })
        .then((res)=> {
            alert('Product ID -> ' + id + ' is Deleted!!');
        })

    }

    const goaddCat = () =>{
        navigation.navigate('addCat')
       
    }




    return (
        <View>
  
                {
                    
                    
                    categories.slice(0,7).map((item)  => (
                        <View >
                               
                        <ListItem >
                        <ListItem.Content  >
                         <View>
                          <ListItem.Title>Name: {item.name}</ListItem.Title>
                          <ListItem.Subtitle>Description: {item.description}</ListItem.Subtitle>
                        
                        </View>
                          <View >
                          <Icon name='delete' onPress={() => deleteCategory(item.id)} />
                          </View>
                        </ListItem.Content>
                      </ListItem>
                      </View>
                    ))
                    }
                 

                <Button onPress={() => goaddCat()} title='Go to add Category !' ></Button>

        </View>
  
    )
    
}

     

   