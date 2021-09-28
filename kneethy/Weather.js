import React from 'react';
import { Text, View } from 'react-native';

const key = "a2636b80c7c4083cd00d031520a39963"; //don't tell anyone

const getWeatherURL = (city) => {
    const URL = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key
    return URL
}

const getWeatherData = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .then((json) => {
        return json.weather;
    })
}

export const WeatherBlock = (props) => {
    const city = props.city
    const url = getWeatherURL(city)
    const data = getWeatherData(url)
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{data}</Text>
        </View>
    );
    
}