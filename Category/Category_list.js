import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {InteractionManager} from 'react-native';
import {Button} from 'react-native';



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

    }

    const goaddCat = () =>{
        navigation.navigate('addCat')
    }

    return (
        <View  style = {styles.MainContainer} >
                {
                    
                    categories.slice(0,7).map((item)  => (
                        <View style={{}} >
                        <ListItem  style={{}}>
                        <ListItem.Content  style={{}}>
                         <View style={{ }}>
                          <ListItem.Title style={{}}>Name:     {item.name}</ListItem.Title>
                          <ListItem.Title style={{ }}>Description:   {item.description}</ListItem.Title>
                        </View>
                          <View style={{padding: 0,flex:3, alignSelf:'center'}}>
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

const styles = StyleSheet.create({
     
    MainContainer: 
    {
    flex: 1,
     
    // Set content's vertical alignment.
    justifyContent: 'center',
     
    // Set content's horizontal alignment.
    alignItems: 'center',
     
    // Set hex color code here.
    backgroundColor: '#FFEB3B',
     
    },

   
});