import React from 'react'
import { View, Text } from 'react-native'

export default function App() {

    let countries = ['Turkey','usa','almanya','kanada'];

    return (
        <View>
            {
                countries.map((item) => (<Text>{item}</Text>))
            }
        </View>
    )
};
