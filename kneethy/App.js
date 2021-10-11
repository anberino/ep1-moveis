import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerLayout } from 'react-native-gesture-handler';
import { weather } from './Weather';
import { floor } from 'react-native-reanimated';
import { listJournal, save } from './Journal'
import { LoginBlock } from './GoogleInOut';

global.logged = false;
global.name = "...?";


function updateName() {
  setName(global.name);
}

function HomeScreen({ navigation }) {
  var [name, setName] = useState("...?");

  function updateName() {
    setName(global.name);
  }

  return (
    <View style={page.container}>
      {customIcon("home-outline")}
      <Text style={page.text}>Home Screen</Text>
      <Text style={page.text}>Olá, {name}</Text>
      <LoginBlock onStuff={_ => updateName()}></LoginBlock>
    </View>
  );
}

function TemperatureScreen({ navigation }) {
  const temperature = Math.floor((weather("São Paulo", "temp")-273.15)/10)*10
  return (
    <View style={page.container}>
      {/* {customIcon("thermometer-outline")} */}
      <Text style={page.iconText}>{temperature}°C</Text>
      <Text style={page.secondaryText}>Temperature</Text>
    </View>
  );
}

function HumidityScreen({ navigation }) {
  return (
    <View style={page.container}>
      {/* {customIcon("beer-outline")} */}
      <Text style={page.iconText}>{weather("São Paulo", "wet")}%</Text>
      <Text style={page.secondaryText}>Humidade</Text>
    </View>
  );
}

function CloudScreen({ navigation }) {
  return (
    <View style={page.container}>
      {/* {customIcon("thunderstorm-outline")} */}
      <Text style={page.iconText}>{weather("São Paulo", "cloud")}%</Text>
      <Text style={page.secondaryText}>Cobertura de nuvens</Text>
    </View>
  );
}

function JournalScreen({ navigation }) {
  return (
    <View style={page.container}>
      {customIcon("book-outline")}
      <Text style={page.secondaryText}>Diário</Text>
      {listJournal()}
    </View>
  );
}

function customIcon(name) {
  return(<Icon name={name} size={128} color="#fff" />)
}

const Perfil = () => {
  return(<Icon name="person-outline" size={24} color="#fff" style={{ marginLeft: 5, marginRight: 15 }} />)
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#222531',
                borderBottomColor: '#222531',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerRight: () => <Perfil/>,
              drawerStyle: {
                backgroundColor:'#222531',
              },
              drawerActiveTintColor: '#fff',
              drawerActiveBackgroundColor: '#5B5F72',
              drawerInactiveTintColor: '#5B5F72',
              drawerInactiveBackgroundColor: '#222531',
            }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle: "K N E E T H Y"}}/>
        <Drawer.Screen name="Temperature" component={TemperatureScreen} />
        <Drawer.Screen name="Humidity" component={HumidityScreen} />
        <Drawer.Screen name="Cloud" component={CloudScreen} />
        <Drawer.Screen name="Journal" component={JournalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222531',
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  secondaryText: {
    color: '#5B5F72',
    fontSize: 20
  },
  iconText: {
    color: '#fff',
    fontSize: 64
  },
});

export default App;