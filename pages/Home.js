import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("Film1")}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://image.tmdb.org/t/p/original/fLiEU12qHCs2xP73OgLFVVObS1k.png",
            }}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Film2")}> 
          <Image
            style={styles.logo}
            source={{
              uri: "https://image.tmdb.org/t/p/original/8aShJDCnsAB2fTsJR92yuaLvPeu.png",
            }}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Film3")}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://image.tmdb.org/t/p/original/tAVA9Wg11RFwOIkQ3Hn8KMk4Xw3.png",
            }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    margin:10,
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
  },
});
