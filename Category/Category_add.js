import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import config from '../env/config'
import basemanager from '../service/baseservice';

const Category_add = () => {

    basemanager.get('api/products')
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
        <View style={styles.container}>
            <ImageBackground source={require('../Images/background.jpg')} style={styles.image} >

                <View>
                    <Input style={styles.textInput}
                        underlineColorAndroid='transparent'
                        placeholder='  Category name'
                        onChangeText={value => setCategoryName(value)}
                    />
                    <Input style={styles.textInput2}

                        multiline
                        numberOfLines={4}

                        placeholder='Description'

                        onChangeText={value => setDescription(value)}
                    />


                </View>


                <View style={styles.fixToText}>
                  
                    <Button
                        onPress={() => send()} title="Send!"
                      
                        color="#8B75B6"
                    />
                </View>


            </ImageBackground>
        </View >

    )
}





export default Category_add

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',


    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal:350,
      },



    sendButton: {
        backgroundColor: "#8B75B6",
        borderRadius: 15,
        width: 260,
        height: 60,
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        }
    },


    textStyle: {
        color: "Black",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'

    },
    title: {
        color: '#e5e5e5',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 60,
        fontFamily: 'Tahoma',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#EEEDE7',
        borderRadius: 2,
        shadowColor: "#1D1437",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 2.82,
        shadowRadius: 2.22,

        elevation: 3,
        marginTop: 10,
        border: 'none',
        overflow: 'hidden'

    },
    textInput2: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EEEDE7',
        borderRadius: 2,
        shadowColor: "#1D1437",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 2.82,
        shadowRadius: 2.22,

        elevation: 3,
        marginTop: 10,
        border: 'none',
        overflow: 'hidden'

    },



});

/*let images = [{num:1}, {num:2},{num:3}]
images.map((resim) = (
    <Card.Image style={styles.image2} source={require('../Images/vegetable'+resim.num+'.jpg')} />
))*/