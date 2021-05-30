import React, { useState, useEffect } from 'react'
import {ListItem, Icon,Card} from 'react-native-elements';
import {InteractionManager,View, Text, StyleSheet,Button,Alert,TouchableHighlight,TouchableOpacity,Image,ImageBackground,StatusBar} from 'react-native';
import TopBar from '../components/TopBar';
import Product_detail from '../Product/Product_detail'
import { NavigationContainer } from '@react-navigation/native';

export default function Product_list({ route,navigation }) {


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
            method : 'DELETE',
            body: JSON.stringify({id:id})
        }

        fetch('https://northwind.vercel.app/api/products/' + id, requestoptions)
            .then((res) => res.json ())
            .then((data) => {
                 fillData(data);
        })
        .then((res)=> {
            alert('Product ID -> ' + id + ' is Deleted!!');
        })

    }
    
    const goaddCat = () =>{
        navigation.navigate('addCat')
       
    }
    const gotoDetailPage = (id)=>{
       navigation.navigate('Productdetail', {id:id})
    }
    return (
        <View style={styles.container}>
            <TopBar/>
        <ImageBackground source={require('../Images/background.jpg')} style={styles.image1} >
            <View>
                {      
                    products.slice(0,8).map((item) => (
                        <Card >
                        <ListItem>
                        <ListItem.Content>
                            <View>
                          <ListItem.Title style={styles.textStyle}>{item.name}</ListItem.Title>
                          <Card.Divider />
                          <ListItem.Subtitle>
                          Price: {item.unitPrice}$
                          </ListItem.Subtitle>  
                          <ListItem.Subtitle>
                          Quantity Per Unit: {item.quantityPerUnit} 
                          </ListItem.Subtitle>  
                          <ListItem.Subtitle>
                          Stock in: {item.unitsInStock}
                          </ListItem.Subtitle>
                                     </View>
                                     <View style={styles.icons}>
                                                    <TouchableHighlight  onPress={() => { gotoDetailPage(item.id)}}>
                                                    <View style={styles.infoicon}>   
                                                    <Icon name='info' />
                                                    <text>Info </text>
                                                    </View>
                                                    </TouchableHighlight>
                                                    <TouchableHighlight  onPress={() => { deleteProduct(item.id) }}>
                                                    <View style={styles.deleteicon}>
                                                    <Icon name='delete'/>
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
    card: {
        backgroundColor: '#fff',
        width: "%100",
        height: 280,
        /* shadowColor: "#000",
         shadowOffset: {
             width: 5,
             height: 5,
         },
         shadowOpacity: 4.32,
         shadowRadius: 5.46,
         elevation: 9,*/

    },
    
    image1:{
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
        marginTop:10,
  },
    deleteicon: {
        flex:1,
        backgroundColor: "#1982c4",
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
        flex:1,
        backgroundColor: "#1982c4",
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
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'

    },
    viewBtn2: {
        backgroundColor: "#8B75B6",
        borderRadius: 15,
        width: 160,
        height: 60,
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 10,
        marginHorizontal: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    buttonText: {
        color: "#EEEDE7",
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto'

    },
  

});

/* 
                                                    
                                                    <TouchableOpacity style={styles.detailbutton} onPress={() => {
                                                         navigation.navigate('Productdetail', {
                                                             itemid: item.id, });}}>
                        <Text style={styles.detailtext}>Show Details</Text>
                      </TouchableOpacity>*/
