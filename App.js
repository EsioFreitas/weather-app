import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, Text, View } from "react-native";
import { API_KEY, REACT_APP_API_URL } from "@env";
import axios from "axios";
import * as Location from "expo-location";
import getWeatherImage from "./src/utils/getWeatherImage";
import styles from "./styles";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [notHasLocation, setNotHasLocation] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  const getWeatherData = async () => {
    const { coords } = location;
    const url = `${REACT_APP_API_URL}lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&lang=pt&units=metric`;
    const { data } = await axios.get(url);
    setWeatherData(data);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setNotHasLocation(true);
      return;
    }
    setNotHasLocation(false);
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  const reloadData = () => {
    setWeatherData(null);
    getWeatherData();
  };

  if (notHasLocation) {
    return (
      <View style={styles.reloadContainer}>
        <Text>Precisamos da sua Localização.</Text>
        <Button title="Permitir" onPress={getLocation} />
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.reloadContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const { name, weather, main, wind } = weatherData;
  const sourceImage = getWeatherImage(weather[0].icon);

  return (
    <View style={styles.container}>
      <Image source={sourceImage} style={styles.image} />
      <Text style={styles.tempText}>{`${Math.round(main.temp)}°C`}</Text>
      <Text style={styles.cityText}>{name}</Text>
      <View style={styles.dataContainer}>
        <View style={styles.centerText}>
          <Text style={styles.boldText}>Pressão</Text>
          <Text>{`${main.pressure}hPa`}</Text>
        </View>
        <View style={styles.centerText}>
          <Text style={styles.boldText}>Umidade</Text>
          <Text>{`${main.humidity}%`}</Text>
        </View>
        <View style={styles.centerText}>
          <Text style={styles.boldText}>Velocidade</Text>
          <Text>{`${wind.speed}m/s`}</Text>
        </View>
      </View>
      <Button title="Recarregar dados" onPress={reloadData} />
    </View>
  );
}
