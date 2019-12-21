import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import ServiceRequest from './ServiceRequest';
import heart from './heart.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const App = ({}) => {
  const imageSize = 100;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={heart}
          style={{width: imageSize, height: imageSize}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('start');
            ServiceRequest.startService();
          }}>
          <Text style={styles.instructions}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ServiceRequest.stopService()}>
          <Text style={styles.instructions}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
