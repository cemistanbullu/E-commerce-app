import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import config from '../env/config'
import basemanager from '../service/baseservice';

const Fetchpostsample = () => {

    basemanager.get('api/products').then((data)=>{
        console.log(data);
    });    
   

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const send = () => {

        // let requestOptions = {
        //     method:'POST',
        //     body:JSON.stringify({name:categoryName, description:description}),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       }
        // }

        // fetch(config.apiurl + 'api/categories',requestOptions)
        // .then((res) => res.json())
        // .then((data) => {

        //    alert('Success!');

        // })

        basemanager.post('api/categories',{name:categoryName, description:description})
        .then((res)=> {
            alert('Success!!');
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

export default Fetchpostsample