import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Perfil = () => {
  return(<Icon name="person-outline" size={24} color="#fff" style={{ marginLeft: 5, marginRight: 15 }} />)
}

const Menu = () => {
  return(<Icon name="menu-outline" size={32} color="#fff" style={{ marginLeft: 5, marginRight: 20 }} />)
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#222531',
              },
              headerTintColor: '#fff',
              headerRight: () => <Perfil/>
            }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle: "K N E E T H Y"}}/>
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;