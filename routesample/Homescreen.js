import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'

export default function Homescreen({ navigation }) {


    const goContact = () => {
       //  navigation.navigate('Contact');
        navigation.push('order');
    }

    const goProducts = () =>{
        navigation.navigate('Products')
    }

    const goCategory = () =>{
        navigation.navigate('Category')
    }

    return (
        <View>
            
            <Text>Home Screen!</Text>
            <Button onPress={() => goContact()} title='Go to Order!'></Button>
            <Button onPress={() => goProducts()} title='Go to Products!'></Button>
            <Button onPress={() => goCategory()} title='Go to Categories!'></Button>

        </View>
    )
}