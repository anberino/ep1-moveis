import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const key = "a2636b80c7c4083cd00d031520a39963"; //don't tell anyone
const info_refs = {
  "temp": ["main", "temp"],
  "wet": ["main", "humidity"],
  "cloud": ["weather", 0, "description"] //poopy
};

export const WeatherBlock = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = getWeatherURL(props.city)
  const block_info = info_refs[props.info]

  const getWeatherInfo = async () => {
      try {
				const response = await fetch(url);
      	console.log("BENGA VOADORA")
      	const json = await response.json();
      	setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeatherInfo();
  }, []); 

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <Text>{JSON.stringify(data[block_info[0]][block_info[1]])}</Text>
      )}
    </View>
  );
};

const getWeatherURL = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key
    return URL
}