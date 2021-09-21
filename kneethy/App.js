import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.topMenu}>
        <div>
          {newIcon('menu', '#fdffff')}
        </div>
        <div>
          <Text style={styles.title}>K N E E T H Y</Text>
        </div>
          {newIcon('user', '#fdffff')}
        <div>
        </div>
      </View>
      <Text style={styles.mainText}>Open up App.js to start working on your apps!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function newIcon(name, color) {
  return <Icon name={name} size={30} color={color} />;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222531',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  mainText: {
    color: '#fdffff',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secText: {
    color: '#5B5E72',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: '#fdffff',
    fontFamily: 'arial',
    alignItems: 'center',
    justifyContent: 'center',
  },
});