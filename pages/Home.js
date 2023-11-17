import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoviesFromApi = async () => {
    try {
      const response = await fetch(
        "https://cinema.donboscosandona.it/movie/featured.json"
      );
      const json = await response.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoviesFromApi();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground resizeMode="cover">
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={movies}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <>
                  <Image
                    style={styles.image}
                    source={{ uri: item.poster_path }}
                  />
                  <Button
                    title={
                      item.title +
                      "\n di: " +
                      item.director +
                      "\n DA:" +
                      item.showtimes[0].date +
                      "\n Alle: " +
                      item.showtimes[0].time
                    }
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate("ActualFilm", {
                        id: item.id,
                      });
                    }}
                  />
                </>
              )}
            />
          )}
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    margin: 10,
  },
  logo: {
    height: 150,
    resizeMode: "contain",
  },
  spazio: {
    padding: 10,
  },
  image: {
    height: 390,
  },
});
