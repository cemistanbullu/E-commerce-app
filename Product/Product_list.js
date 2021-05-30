import React, { useState, useEffect } from 'react'
import { ListItem, Icon, Card } from 'react-native-elements';
import { InteractionManager, View, Text, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import TopBar from '../components/TopBar';
import Product_detail from '../Product/Product_detail'
import { NavigationContainer } from '@react-navigation/native';

export default function Product_list({ route, navigation }) {


    const [products, setproducts] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = () => {
        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => {

                setproducts(data);
            })
    }

    const deleteProduct = (id) => {

        let requestoptions = {
            method: 'DELETE',
            body: JSON.stringify({ id: id })
        }

        fetch('https://northwind.vercel.app/api/products/' + id, requestoptions)
            .then((res) => res.json())
            .then((data) => {
                fillData(data);
            })
            .then((res) => {
                alert('Product ID -> ' + id + ' is Deleted!!');
            })

    }

    const goaddCat = () => {
        navigation.navigate('addCat')

    }
    const gotoDetailPage = (id) => {
        navigation.navigate('Productdetail', { id: id })
    }
    return (
        <View style={styles.container}>
            <TopBar />
            <ImageBackground source={require('../Images/background.jpg')} style={styles.image1} >
                <View>
                    {
                        products.slice(0, 8).map((item) => (
                            <Card >
                                <ListItem>
                                    <ListItem.Content>
                                        <View>
                                            <ListItem.Title style={styles.textStyle}>{item.name}</ListItem.Title>
                                            <Card.Divider />
                                            <ListItem.Subtitle style={styles.styleSubtitle}>
                                                Price: {item.unitPrice}$
                                            </ListItem.Subtitle>
                                            <ListItem.Subtitle style={styles.styleSubtitle}>
                                                Quantity Per Unit: {item.quantityPerUnit}
                                            </ListItem.Subtitle>
                                            <ListItem.Subtitle style={styles.styleSubtitle}>
                                                Stock in: {item.unitsInStock}
                                            </ListItem.Subtitle>
                                        </View>
                                        <View style={styles.icons}>
                                            <TouchableHighlight onPress={() => { gotoDetailPage(item.id) }}>
                                                <View style={styles.infoicon}>
                                                    <Icon name='info' />
                                                    <text>Info </text>
                                                </View>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() => { deleteProduct(item.id) }}>
                                                <View style={styles.deleteicon}>
                                                    <Icon name='delete' />
                                                    <text>Delete </text>
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                    </ListItem.Content>
                                </ListItem>
                            </Card>

                        ))
                    }
                    <View >
                        <Card.Divider />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    image1: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: "space-around",
        //marginHorizontal: 60,
        marginTop: 10,
    },
    deleteicon: {
        flex: 1,
        backgroundColor: "#8B75B6",
        borderRadius: 15,
        width: 60,
        height: 60,
        padding: 8,
        textAlign: 'center',
        marginHorizontal: 120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    infoicon: {
        flex: 1,
        backgroundColor: "#8B75B6",
        borderRadius: 15,
        width: 60,
        height: 60,
        padding: 8,
        textAlign: 'center',
        marginHorizontal: 10,

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.22,
        shadowRadius: 2.22,

        elevation: 3,

    },

    textStyle: {
        color: "Black",
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'
    
      },
      styleSubtitle: {
        marginVertical: 10,
        fontWeight:'bold'
      },
 
});


