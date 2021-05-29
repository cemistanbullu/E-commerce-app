import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import config from '../env/config'
import basemanager from '../service/baseservice';

const Category_add = () => {

    basemanager.get('api/products')
    .then((res)=> {
        alert('You can add your special products here!!! ' );
    })
    .then((data)=>{
        console.log(data);
    });    
   

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const send = () => {

        basemanager.post('api/categories',{name:categoryName, description:description})
        .then((res)=> {
            alert('Successfuly added!!');
        })
    }


    return (
        <View>

            <Input
                placeholder='Category name'
                onChangeText={value => setCategoryName(value)}
            />

            <Input
                placeholder='Description'
                onChangeText={value => setDescription(value)}
            />  

            <Button onPress={() => send()} title='Send'></Button>


        </View>
    )
}

export default Category_add