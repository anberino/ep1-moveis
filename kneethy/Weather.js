// import React from 'react';
// import { Text, View } from 'react-native';

// // const getWeatherData = (url) => {
// //     return fetch(url)
// // }

// const getMoviesFromApiAsync = async () => {
//     try {
//       const response = await fetch(
//         'https://reactnative.dev/movies.json'
//       );
//       const json = await response.json();
//       return json.movies;
//     } catch (error) {
//       console.error(error);
//     }
//   };

// export const WeatherBlock = (props) => {
//     const city = props.city
//     const url = getWeatherURL(city)
//     const data = getMoviesFromApiAsync()
//     return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>{data}</Text>
//         </View>
//     );
    
// }

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const key = "a2636b80c7c4083cd00d031520a39963"; //don't tell anyone

export const WeatherBlock = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = getWeatherURL(props.city)

  const getMovies = async () => {
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
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <Text>{JSON.stringify(data['main']['temp'])}</Text>
      )}
    </View>
  );
};

const getWeatherURL = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key
    return URL
}