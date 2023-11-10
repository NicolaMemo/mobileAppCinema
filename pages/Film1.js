import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Film1({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cinema.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d62ada1ab7318d44ebddc19bcdfb6c8bb9229466/The%20marvels.jpeg",
          }}
        />
        <Text style={styles.testo}>
          Carol Danvers alias Captain Marvel si è ripresa la sua identità dal
          tirannico Kree e ha avuto la sua vendetta contro la Suprema
          Intelligenza. Ma a causa di conseguenze inaspettate, Carol si carica
          del fardello di un universo destabilizzato. Quando i suoi doveri la
          mandano in un wormhole anomalo collegato a un rivoluzionario Kree, i
          suoi poteri si intrecciano con quelli della super fan di Jersey City,
          Kamala Khan alias Ms. Marvel, e la nipote di Carol da cui si è
          separata da tempo, il capitano Monica Rambeau. Insieme questo trio
          improbabile deve fare squadra e imparare a lavorare in sinergia per
          salvare l’universo nei panni delle “Marvels”.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text> LUNEDÌ 13 NOVEMBRE ore 17.00</Text>
        <Text>MARTEDÌ 14 NOVEMBRE ore 17.15</Text>
        <Text>MERCOLEDÌ 15 NOVEMBRE ore 17.00</Text>
        <Text> LUNEDÌ 13 NOVEMBRE ore 17.00</Text>
        <Text>MARTEDÌ 14 NOVEMBRE ore 17.15</Text>
        <Text>MERCOLEDÌ 15 NOVEMBRE ore 17.00</Text>
        <Button title="Compra" onPress={() => navigation.navigate('Compra')} />
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
    width: "100%",
    height: 550,
  },
  testo: {},
});
