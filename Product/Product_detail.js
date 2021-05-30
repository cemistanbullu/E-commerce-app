import React, { useState, useEffect } from 'react'
import { InteractionManager, View, Text, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import TopBar from '../components/TopBar';
import { BackgroundImage } from 'react-native-elements/dist/config';

function Product_detail({ route, navigation }) {

  const { id } = route.params;

  const [products, setProducts] = useState([]);


  useEffect(() => {
    fillData(id);

  }, []);

  const fillData = (id) => {
    fetch('https://northwind.vercel.app/api/products/' + id)
      .then((res) => res.json())
      .then((products) => {

        setProducts(products);
      })
  }


  return (
    <View style={styles.container}>
      <TopBar />
      <ImageBackground source={require('../Images/background.jpg')} style={styles.image1} >


        <Card >
         
            <ListItem>
              <ListItem.Content>
                <View>

                  <ListItem.Title style={styles.textStyle}>{products.name}</ListItem.Title>
                  <Card.Divider />

                  <View >
                    <Image style={styles.image2} source={require('../Images/food.jpg')} />
                  </View>
                  <ListItem.Subtitle style={styles.styleSubtitle} >Price: {products.unitPrice}$</ListItem.Subtitle>
                  <ListItem.Subtitle style={styles.styleSubtitle}>Quantity Per Unit: {products.quantityPerUnit}</ListItem.Subtitle>
                  <ListItem.Subtitle style={styles.styleSubtitle}>Stock in: {products.unitsInStock}</ListItem.Subtitle>
                </View>
              </ListItem.Content>
            </ListItem>


        </Card>
      </ImageBackground>
    </View>
  );
}
export default Product_detail

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
  textStyle: {
    color: "Black",
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Tahoma'

  },
  image2: {
    width: 200,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  styleSubtitle: {
    marginVertical: 10,
    fontWeight:'bold'
  },
});

