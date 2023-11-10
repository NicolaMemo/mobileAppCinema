import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Film2({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={{
            uri: "https://image.tmdb.org/t/p/original/l3Pn6hTL2JIk3CKUp1OeInRaEwg.jpg",
          }}
        />
        <Text style={styles.testo}>
          Dopo due film all'insegna della vera amicizia e del continuo flirt,
          Poppy e Branch sono ora ufficialmente, finalmente, una coppia
          (#broppy)! Man mano che si legano sempre di più, Poppy scopre che
          Branch ha un passato segreto. Faceva parte della sua boyband
          preferita, la BroZone, insieme ai suoi quattro fratelli: Floyd, John
          Dory, Spruce e Clay. I BroZone si sono sciolti quando Branch era
          ancora un bambino, così come la sua famiglia, e da allora Branch non
          ha più visto i suoi fratelli. Ma quando Floyd, il fratello di Branch,
          viene rapito a causa del suo talento musicale da una coppia di
          malvagie popstar - Velvet e Veneer - Branch e Poppy intraprendono un
          viaggio straordinario ed emozionante per riunire gli altri fratelli e
          salvare Floyd da un destino ancora peggiore dell'oscurità della
          cultura pop.
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
