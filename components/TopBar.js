import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../images/foodlogo.jpg')}
      />
        <Text style={styles.texttitle}>Bau's Kitcheen</Text>
        <Text style={styles.text}>C&B</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: "#ffca3a",
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  image:{ 
    width: 60, 
    height: 60,
    marginLeft:0,
  },
  texttitle:{
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Tahoma'
  },
  text:{
    color: "white",
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Tahoma'
  }
});

export default TopBar;