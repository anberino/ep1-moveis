import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

const Item = ({ title, temperature }) => (
    <View style={page.container}>
      <Text style={page.text}>{title}</Text>
      <Text style={page.secondaryText}>{temperature}°C</Text>
    </View>
);

function addData(data, entry) {
    var temp = {"id": 0, "text": entry, "temperature":24}
    var tData = JSON.stringify(data)
    tData = JSON.parse(data)
    temp["id"] = tData.length
    tData.push(temp)
    return tData;
}

export function listJournal() {
    const [text, onChangeText] = React.useState("");
    const [data, setData] = useState();

    const load = async (key) => {
        var data = null;
        try {
            data = await AsyncStorage.getItem(key)
            if (data === null) return
            setData(data)
        } catch (e) {
            console.error('Failed to load.')
        }
        return JSON.parse(data)
    }

    const save = async (key, data) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data))
            setData(JSON.stringify(data))
        } catch (e) {
            console.error('Failed to save.')
        }
    }

    useEffect (() => {
        load("macaco")
    }, [])

    console.log(data)

    const renderItem = ({ item }) => (
        <Item title={item.text} temperature={item.temperature} />
    );
    
    if (!(data == undefined)) {
    return (
        <SafeAreaView style={page.list}>
            <View style={page.in}>
                <TextInput multiline style={page.textin} onChangeText={onChangeText} value={text} />
                <Button style={page.butt} onPress={() => save("macaco", addData(data, text))} title="add" />
            </View>
            <FlatList 
            data={JSON.parse(data)}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
    }
    save("macaco", [])
    return (
        <ActivityIndicator/>
    )
}

const page = StyleSheet.create({
    list: {
        alignSelf: 'stretch',
    },
    container: {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#5B5F72',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: '2%'
    },
    secondaryText: {
        color: '#5B5F72',
        fontSize: 20,
        marginLeft: '2%'
    },
    iconText: {
      color: '#fff',
      fontSize: 64
    },
    in: {
        flexDirection:'row'
    },
    butt: {
        backgroundColor:'blue'
    },
    textin: {
        flex: 1,
        backgroundColor:'white'
    }
  });