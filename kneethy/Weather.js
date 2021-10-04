import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const key = "a2636b80c7c4083cd00d031520a39963"; //don't tell anyone
const info_refs = {
  "temp": ["main", "temp"],
  "wet": ["main", "humidity"],
  "cloud": ["clouds", "all"] //poopy
};

export function weather(city, info) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = getWeatherURL(city)
  const block_info = info_refs[info]

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

  if (isLoading){
    return <ActivityIndicator/>
  }
  return JSON.stringify(data[block_info[0]][block_info[1]])
};

const getWeatherURL = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key
    return URL
}