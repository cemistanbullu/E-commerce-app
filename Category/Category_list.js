import React, { useState, useEffect } from 'react';
import { ListItem, Icon, Card } from 'react-native-elements';
import {InteractionManager,View, Text, StyleSheet,Button,Alert,TouchableHighlight,TouchableOpacity,Image,ImageBackground} from 'react-native';




export default function Category_list({ navigation }) {
 

    const [categories, setcategories] = useState([]);


    useEffect(() => {
        fillData();

    }, []);

    const fillData = () => {
        fetch('https://northwind.vercel.app/api/categories')
        .then((res) => res.json())
        .then((data) => {

           setcategories(data);

        })
    }

    const deleteCategory = (id) => {
        
        let requestoptions = {
            method : 'DELETE',
            body: JSON.stringify({id:id})
        }

        fetch('https://northwind.vercel.app/api/categories/' + id, requestoptions)
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




    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Images/background.jpg')} style={styles.image1} >
                <View>
                    {

                        categories.slice(0, 7).map((item) => (
                            <Card >

                                <View style={styles.card} >

                                    <ListItem >
                                        <ListItem.Content  >
                                            <View>
                                                <ListItem.Title style={styles.textStyle}>Name: {item.name}</ListItem.Title>
                                                <Card.Image style={styles.image2} source={require('../Images/vegetable.jpg')} />

                                                <Card.Divider />
                                                <ListItem.Subtitle >Description: {item.description}</ListItem.Subtitle>


                                            </View>




                                            <TouchableHighlight onPress={() => { deleteCategory(item.id) }}>
                                                <View style={styles.deleteicon}>

                                                    <Icon name='delete' />
                                                    <text>Delete </text>

                                                </View>
                                            </TouchableHighlight>
                                        </ListItem.Content>

                                    </ListItem>

                                </View>

                            </Card>
                        ))

                    }





                    <View >
                        <TouchableOpacity onPress={() => goaddCat()}>
                            <View style={styles.viewBtn2}>
                                <Text style={styles.buttonText}>Go to add Category</Text>
                            </View>
                        </TouchableOpacity>
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
    iconView: {
        border: "0.1rem outset black",
        marginHorizontal: 260,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    image1:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    image2: {
        // flex: 1,
        //  resizeMode: "",
        justifyContent: "center",

        width: 100,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 100,
    },

    deleteicon: {
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 60,
        height: 60,
        padding: 8,
        textAlign: 'center',
        marginHorizontal: 225,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.22,
        shadowRadius: 2.22,

        elevation: 3,

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
  

    textStyle: {
        color: "Black",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'

    },
    buttonText: {
        color: "#EEEDE7",
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto'

    },

 

});

   