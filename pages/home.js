import { useFonts } from 'expo-font';
import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

const carouselData = [
  {name: "Prendre rendez vous chez mon médecin.", img: require("../assets/carousel1.jpeg")},
  {name: "Récupérer le QR code de mon ordonnance en fin de consultation.", img: require("../assets/carousel2.jpeg")},
  {name: "Partager le QR code de mon ordonnance à mon pharmacien.", img: require("../assets/carousel3.jpeg")}
]

export default function HomeScreen() {
  const [isLoaded] = useFonts({
    "Montserrat": require("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
    "Open Sans": require("../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth-wght.ttf"),
  });
  const width = Dimensions.get('window').width;

  if(!isLoaded) return null;

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width*0.8}
        height={width*0.8}
        autoPlay={true}
        autoPlayInterval={8000}
        data={carouselData}
        renderItem={({ item, index }) => (
          <View
            style={styles.carousel}
          >
            <View style={styles.textRow}>
              <Text style={styles.title}>
                  {index+1}
                </Text>
              <Text style={styles.text}>
                {item.name}
              </Text>
            </View>
            <Image style={styles.image} source={item.img} />
          </View>
        )}
      />
      <View style={styles.auth}>
        <TouchableOpacity style={[styles.authButton, {width: width*0.8}]}>
          <Text style={styles.authText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.authButton, {width: width*0.8}]}>
          <Text style={styles.authText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Mes ordonnances</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Scanner une ordonnance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: '10%',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  textRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
    width: '80%',
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 42,
    top: -4,
    color: '#4153EF',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    backgroundColor: '#DDE6ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    padding: 8,
    width: 110,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    color: '#4153EF',
    textAlign: 'center'
  },
  auth: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  authButton: {
    display: 'flex',
    backgroundColor: '#4153EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    padding: 8,
  },
  authText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
});