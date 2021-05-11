import React from 'react'
import { View, Text } from 'react-native'

export default function index() {

    let countries = ['Turkey112','usa121','alm23anya','kanada'];

    return (
        <View>
            {
                countries.map((item) => (<Text>{item}</Text>))
            }
        </View>
    );
}
