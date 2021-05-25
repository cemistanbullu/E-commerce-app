import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

export default function Productsscreen({navigation}) {


    let products = [{id:1,name:'IPhoneee'}, {id:2,name:'Samsung'},{id:3,name:'Huawei'}]


    const gotoDetailPage = (id)=>{

        navigation.navigate('Productdetail',{productid:id})

    }

    return (
        <View>
             {
                products.map((item) => (

                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        

                            <Icon
                                name='rowing' onPress={() => gotoDetailPage(item.id)} />
                        </ListItem.Content>
                    </ListItem>

                ))
            }
        </View>
    )
}