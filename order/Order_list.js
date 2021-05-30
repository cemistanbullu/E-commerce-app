import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity,SafeAreaView,ScrollView, StyleSheet,TouchableHighlight,Image,ImageBackground} from 'react-native';
import { ListItem,Icon ,Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import TopBar from '../components/TopBar';
import color from 'color';

function Order_list({ route, navigation }) {
  
    const [orders, setorders] = useState([]);

  useEffect(() => {
    fillData();
  }, []);

 

  const fillData = () => {
    fetch('https://northwind.vercel.app/api/orders')
      .then((res) => res.json())
      .then((orders) => {
        setorders(orders);
      });

    
  };

  const deleteCategory = (id) => {
        
    let requestoptions = {
        method : 'DELETE',
        body: JSON.stringify({id:id})
    }

    fetch('https://northwind.vercel.app/api/orders/' + id, requestoptions)
        .then((res) => res.json ())
        .then((data) => {
             fillData(data);
    })
    .then((res)=> {
        alert('Order ID -> ' + id + ' is Deleted!!');
    })

}


  return (
    
    <View style={styles.container}>
      <TopBar/>
    <ImageBackground source={require('../Images/background.jpg')} style={styles.image1} >
      <View>
        {orders.slice(0,8).map((detail) => (
          <Card styles={{ card: { backgroundColor: 'red' }}}>
          <View style={styles.card}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title style={styles.textStyle}> Customer: {detail.customerId} </ListItem.Title>
                <Card.Divider />
                <ListItem.Subtitle style={styles.styleSubtitle}> Order date: {detail.orderDate} </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.styleSubtitle}> Shipped Date: {detail.shippedDate} </ListItem.Subtitle>
                <TouchableHighlight style={styles.deleteicon} onPress={() => { deleteCategory(detail.id) }}>
                                                <View >
                                                    <Icon name='delete' />
                                                    <text >Delete </text>
                                                </View>
                                            </TouchableHighlight>

              </ListItem.Content>
            </ListItem>
          </View>
          </Card>
        ))}
        <Card.Divider />
      </View>
      </ImageBackground>
        </View>
  );
}
export default Order_list;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
  },
  image1:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      height: '100%',
  },

  deleteicon: {
      backgroundColor: "#8B75B6",
      borderRadius: 15,
      width: 60,
      height: 60,
      marginTop: 28,
      paddingTop:10,
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
  textStyle: {
    color: "Black",
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Tahoma'

  },
  styleSubtitle: {
    marginVertical: 3,
    fontWeight:'bold'
  },
});
