import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function decrpytOrdo(ordo) {
  let data = ordo.split('/');
  let prescriptions = [];
  for(const presc of data[3].split(',')){
    prescriptions.push({
      name: presc.split('-')[0],
      quantity: presc.split('-')[1],
    })
  };
  let ordonnance = {
    name: data[0],
    date: data[1],
    comment: data[2],
    prescription: prescriptions,
  };
  return ordonnance;
}

const ordoData = [
  {title: 'Juin 2023', data: [
    decrpytOrdo('Mattéo Lo Re/1688382801299/a prendre matin midi et soir !/[Amoxicilline-3Paracétamol-1]'),
    decrpytOrdo('Florian Venet/1682489571794//[Phloroglucinol-2]'),
    decrpytOrdo('Clément Olivier/1681482101790/a prendre matin midi et soir !/[Amoxicilline-3Paracétamol-1]'),
    decrpytOrdo('Léo Torrado/1688483575294//[Phloroglucinol-2]'),
    decrpytOrdo('Martin Ménot/1688182801090/a prendre matin midi et soir !/[Amoxicilline-3Paracétamol-1]'),
  ]},
  {title: 'Mars 2023', data: [
    decrpytOrdo('Léo Torrado/1688289575894//[Phloroglucinol-2]'),
    decrpytOrdo('Martin Ménot/1681482891890/a prendre matin midi et soir !/[Amoxicilline-3Paracétamol-1]'),
    decrpytOrdo('Martin Ménot/1688289570794//[Phloroglucinol-2]'),
  ]},
  {title: 'Décembre 2022', data: [
    decrpytOrdo('Clément Olivier/1681482801890/a prendre matin midi et soir !/[Amoxicilline-3Paracétamol-1]'),
    decrpytOrdo('Léo Torrado/1638489575794//[Phloroglucinol-2]'),
  ]},
]

export default function OrdoScreen() {

  const [isLoaded] = useFonts({
    "Montserrat": require("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
    "Open Sans": require("../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth-wght.ttf"),
  });

  if(!isLoaded) return null;

  return (
    <View style={styles.container}>
      <SectionListBasics />
    </View>
  )
}

const days = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const SectionListBasics = () => {

  return (
      <SectionList
        sections={ordoData}
        renderItem={({item}) => 
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>
              {days[(new Date(parseInt(item.date))).getDay()]}
              {' '}
              {(new Date(parseInt(item.date))).getDate()}
              {' | '}
              {item.name}</Text>
            <Ionicons name="trash-bin-outline" size={16} color="black" />
          </TouchableOpacity>
      }
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item.date}`}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    widht: '100%',
    paddingLeft: '5%',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  listText: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    paddingVertical: 8,
  }
});