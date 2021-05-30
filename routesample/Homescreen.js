import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import TopBar from '../components/TopBar';



export default function Homescreen({ navigation }) {


    const goContact = () => {
        //  navigation.navigate('Contact');
        navigation.push('order');
    }

    const goProducts = () => {
        navigation.navigate('Products')
    }

    const goCategory = () => {
        navigation.navigate('Category')
    }


    return (
        
        <View style={styles.container} >
<TopBar />
            <ImageBackground source={require('../Images/background.jpg')} style={styles.image}>
            



                <View style={styles.title}> <Text style={styles.titletext}> Food Cort </Text></View>


                <View>
                    <TouchableOpacity onPress={() => goProducts()}>
                        <View style={styles.viewBtn2}>
                            <Text style={styles.textStyle}>Go to Products!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => goCategory()}>
                        <View style={styles.viewBtn3}>
                            <Text style={styles.textStyle}>Go to Categories!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => goContact()}>
                        <View style={styles.viewBtn1}>

                            <Text style={styles.textStyle}>Go to Order!</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.titlebottom}> <Text style={styles.titlebottomtext}> Just for 1 click far! </Text></View>


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

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },

    viewBtn1: {
        backgroundColor: "#1D1437",
        borderRadius: 15,
        width: 260,
        height: 60,
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 58,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    viewBtn2: {
        backgroundColor: "#8B75B6",
        borderRadius: 15,
        width: 260,
        height: 60,
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 58,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 4.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    viewBtn3: {
        backgroundColor: "#6F508E",
        borderRadius: 15,
        width: 260,
        height: 60,
        textAlign: 'center',
        paddingVertical: 20,
        marginTop: 30,
        marginHorizontal: 58,
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
        color: "#e5e5e5",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Tahoma'

    },
    titletext: {
        color: '#e5e5e5',
        fontSize: 35,
        fontWeight: 'bold',
        marginHorizontal: 60,
        fontFamily: 'Tahoma',

    },
    title: {
        alignItems:"center",
        justifyContent: "center",
    },
    titlebottomtext: {
        color: '#e5e5e5',
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 60,
        fontFamily: 'Tahoma',
        opacity:0.5

    },
    titlebottom: {
        alignItems:"center",
        justifyContent: "center",
        marginTop:40
    },

});