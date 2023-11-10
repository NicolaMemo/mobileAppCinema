import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Film3({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={{
            uri: "https://image.tmdb.org/t/p/original/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg",
          }}
        />
        <Text style={styles.testo}>
          È l’estate del 1957. Dietro lo spettacolo della Formula 1, l’ex pilota
          Enzo Ferrari è in crisi. Il fallimento incombe sull’azienda che lui e
          sua moglie Laura hanno costruito da zero dieci anni prima. Il loro
          matrimonio si incrina con la perdita del loro unico figlio Dino.
          Ferrari lotta per riconoscerne un altro, avuto con Lina Lardi. Nel
          frattempo la passione dei suoi piloti per la vittoria li spinge al
          limite quando si lanciano nella pericolosa corsa che attraversa tutta
          l’Italia: la Mille Miglia. cultura pop.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text> DOMENICA 13 NOVEMBRE ore 17.00</Text>
        <Text>GIOVEDI 14 NOVEMBRE ore 17.15</Text>
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
