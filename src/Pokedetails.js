import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export const Details = ({ route }) => {
  const { pokemonInfo } = route.params;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  }
  return (
    <View style={[styles.container, { backgroundColor: getColorFromType(pokemonInfo.types[0]) }]}>
      <TouchableOpacity onPress={handleBack} style={{ paddingHorizontal: 20 }}>
        <Ionicons name={'arrow-back'} size={30} color={'#FFF'} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.pokeID}>{pokemonInfo.id.toString().padStart(4, '#000')}</Text>
        <Text style={styles.pokeName}>{capitalize(pokemonInfo.name)}</Text>
        <View style={styles.pokeImgContainer}>
          {pokemonInfo.types.map((type, index) => (
            <Text key={index} style={styles.pokeType}>{capitalize(type)}</Text>
          ))}
          <Image style={styles.pokeLogo} source={require('../assets/pokeball.png')} />
          <Image source={{ uri: pokemonInfo.image }} style={styles.pokeImage} />
        </View>
      </View>

      <View style={styles.pokeInfoContainer}>

        <ScrollView style={styles.pokeInfoContent} showsVerticalScrollIndicator={false} >
          <Text style={[styles.pokeDetail, { color: getColorFromType(pokemonInfo.types[0]) }]}>Sobre o pokemon</Text>
          <Text style={styles.pokeDescription}>{pokemonInfo.description}</Text>

          <Text style={[styles.pokeSubTitle, { color: getColorFromType(pokemonInfo.types[0]) }]}>Dados principais</Text>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Espécie</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.species}</Text>
          </View>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Tamanho</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.height}m</Text>
          </View>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Peso</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.weight}kg</Text>
          </View>

          <Text style={[styles.pokeSubTitle, { color: getColorFromType(pokemonInfo.types[0]) }]}>Treinamento</Text>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >EV Yield</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.training.evYield}</Text>
          </View>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Catch Rate</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.training.catchRate.value} {pokemonInfo.training.catchRate.text}</Text>
          </View>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Base Frindship</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.training.baseFriendship.value} {pokemonInfo.training.baseFriendship.text}</Text>
          </View>

          <Text style={[styles.pokeSubTitle, { color: getColorFromType(pokemonInfo.types[0]) }]}>Breeding</Text>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Egg Groups</Text>

            {pokemonInfo.breedings.eggGroups.map((breeding, index) => (

              /**Quando o tamanho do array de eggGroups - 1 for igual ao index (ultima posição ), não colocar virgula , se for diferente separar com virgula */
              <Text key={index} style={styles.pokeValue} >{breeding} {pokemonInfo.breedings.eggGroups.length - 1 === index ? '' : ', '}</Text>

            ))}
          </View>

          <View style={styles.pokeWrapper}>
            <Text style={styles.pokeKey} >Egg Cycles</Text>
            <Text style={styles.pokeValue} >{pokemonInfo.breedings.eggCycles.value} {pokemonInfo.breedings.eggCycles.text}</Text>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

const capitalize = text => {
  text = text.replace('-', ' ');
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const getColorFromType = type => {
  switch (type) {
    default:
      return '#000';
    case 'bug':
      return '#8BD674';
    case 'dark':
      return '#6F6E78';
    case 'dragon':
      return '#7383B9';
    case 'electric':
      return '#ffd86f';
    case 'fairy':
      return '#EBA8C3';
    case 'fighting':
      return '#EB4971';
    case 'fire':
      return '#fb6c6c';
    case 'flying':
      return '#83A2E3';
    case 'ghost':
      return '#8571BE';
    case 'grass':
      return '#48d0b0';
    case 'ground':
      return '#F78551';
    case 'ice':
      return '#91D8DF';
    case 'normal':
      return '#B5B9C4';
    case 'poison':
      return '#9F6E97';
    case 'psychic':
      return '#FF6568';
    case 'rock':
      return '#D4C294';
    case 'steel':
      return '#4C91B2';
    case 'water':
      return '#76bdfe';
  }
};


const styles = StyleSheet.create({

  container: { flex: 1, paddingTop: 25 },

  header: { paddingTop: 40, paddingHorizontal: 20, paddingBottom: 25, },

  pokeID: { fontWeight: '700', fontSize: 18, color: '#FFF' },

  pokeName: { fontWeight: '700', fontSize: 36, color: '#FFF', marginBottom: 10 },

  pokeType: { backgroundColor: 'rgba(255,255,255, 0.3)', fontWeight: '500', color: '#FFF', borderRadius: 30, paddingHorizontal: 15, paddingVertical: 5, marginRight: 10 },

  pokeLogo: { tintColor: '#fff', opacity: 0.2, width: 200, height: 200, position: 'absolute', bottom: -45, right: -30 },

  pokeImage: { zIndex: 1, width: 150, height: 150, position: 'absolute', alignSelf: 'flex-end', right: -10, bottom: -80 },

  pokeImgContainer: { flexDirection: 'row', marginTop: 10 },

  pokeInfoContainer: { flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 60, marginHorizontal: 10 },

  pokeInfoContent: { paddingHorizontal: 40, paddingBottom: 20 },

  pokeDetail: { marginVertical: 20, marginHorizontal: 0, fontSize: 22, fontWeight: '700', },

  pokeDescription: { color: '#747476', fontSize: 16, marginBottom: 10 },

  pokeSubTitle: { marginVertical: 20, marginHorizontal: 0, fontSize: 16, fontWeight: '700', },

  pokeWrapper: { flexDirection: 'row', marginBottom: 15 },

  pokeKey: { color: '#000000', width: 120, fontSize: 14, fontWeight: 'bold' },

  pokeValue: { color: '#747476', fontSize: 14 },





});
