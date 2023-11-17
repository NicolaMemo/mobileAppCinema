import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function ActualFilm({ route, navigation }) {
  const { id } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoviesFromApi = async (id) => {
    try {
      const response = await fetch(
        "https://cinema.donboscosandona.it/movie/show/" + id + ".json"
      );
      const json = await response.json();
      setMovies(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoviesFromApi(id);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground resizeMode="cover">
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Image
                style={styles.image}
                source={{ uri: movies.poster_path }}
              />
              <Text>{movies.overview}</Text>
              <Button
                title={
                  movies.title +
                  "\n di: " +
                  movies.director +
                  "\n DA:" +
                  movies.showtimes[0].date +
                  "\n\n\n\n Alle: " +
                  movies.showtimes[0].time +

                  "\n DA:" +
                  movies.showtimes[1].date +
                  "\n Alle: " +
                  movies.showtimes[1].time
                  +
                  "\n DA:" +
                  movies.showtimes[2].date +
                  "\n Alle: " +
                  movies.showtimes[2].time
                  +

                  "\n DA:" +
                  movies.showtimes[3].date +
                  "\n Alle: " +
                  movies.showtimes[3].time
                  +

                  "\n DA:" +
                  movies.showtimes[4].date +
                  "\n Alle: " +
                  movies.showtimes[4].time
                  +

                  "\n DA:" +
                  movies.showtimes[5].date +
                  "\n Alle: " +
                  movies.showtimes[5].time
                  +
                  "\n DA:" +
                  movies.showtimes[6].date +
                  "\n Alle: " +
                  movies.showtimes[6].time
                  +
                  "\n DA:" +
                  movies.showtimes[7].date +
                  "\n Alle: " +
                  movies.showtimes[7].time
                  +
                  "\n DA:" +
                  movies.showtimes[8].date +
                  "\n Alle: " +
                  movies.showtimes[8].time
                }
              />
              
            </>
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
