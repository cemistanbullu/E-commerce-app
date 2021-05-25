import React from 'react'
import { View, Text } from 'react-native'

export default function Productdetailsscreen({ route }) {


    let { productid } = route.params



    return (
        <View>
            {productid}
        </View>
    )
}