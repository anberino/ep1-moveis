import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerLayout } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <View style={page.container}>
      {customIcon("home-outline")}
      <Text style={page.text}>Home Screen</Text>
    </View>
  );
}

function TemperatureScreen({ navigation }) {
  return (
    <View style={page.container}>
      {customIcon("sunny-outline")}
      <Text style={page.text}>Temperature Screen</Text>
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222531'
  },
  text: {
    color: '#fff'
  },
});

export default App;