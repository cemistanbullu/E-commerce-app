import React, { useState } from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';
import Fetchpostsample from './fetchsample/Fetchpostsample';
import Fetchsample1 from './fetchsample/Fetchsample1';


export default function App() {

  const [onoff, setOnoff] = useState(false)




  return (
    <View>

      <Fetchsample1></Fetchsample1>
     
      {
      /*  onoff ? (<View>On</View>) : (<View>Off</View>)*/
      }

      {/* <Button title='On - Off' onPress={() => setOnoff(!onoff)}>On - Off</Button> */}
    </View>
  );

}
