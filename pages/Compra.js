import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    ScrollView,
    ActivityIndicator
  } from "react-native";
 export default function Compra({ navigation }) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.logo}
            source={{
              uri: "https://i.guim.co.uk/img/media/b78eba8720659708cba9c1c5338a7e7773a56446/0_85_4288_2572/master/4288.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1997f5ce90231b9dd753f9e04e4a9dd5",
            }}
          />
          <Text style={styles.testo}>
          Se gestisci un e-commerce devi pubblicare termini e condizioni di vendita a norma.

Infatti, questi documenti legali (detti anche "condizioni generali di vendita") regolano il rapporto tra il tuo sito di commercio elettronico e i clienti.

La presente guida è dedicata a web agency e titolari di siti di commercio elettronico. Il documento contiene anche brevi tutorial su come generare termini di vendita usando il tool di LegalBlink.
          </Text>
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
      width: 500,
      height: 550,
    },
    testo: {},
  });
  