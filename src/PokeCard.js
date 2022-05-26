import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const PokeCard = ({ pokemon }) => {
  const navigation = useNavigation();

  const handleDetails = (pokemonInfo) => {
    navigation.navigate('Details', { pokemonInfo })
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => handleDetails(pokemon)}
      style={[card.container, { backgroundColor: getColorFromType(pokemon.types[0]), }]}>

      <Text style={card.id} numberOfLines={1}>
        {pokemon.id.toString().padStart(4, '#000')}
      </Text>
      <Text style={card.name} numberOfLines={1}>
        {capitalize(pokemon.name)}
      </Text>
      <Image style={card.pokeball} source={require('../assets/pokeball.png')} />
      <Image source={{ uri: pokemon.image }} style={card.pokemon} />
      <View style={styles.container}>
        {pokemon.types.map((type, index) => {
          return (
            <Text key={index} style={styles.type}>
              {capitalize(type)}
            </Text>
          );
        })}
      </View>
    </TouchableOpacity>
  );
};

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

const card = StyleSheet.create({
  container: {
    height: 130,
    padding: 20,
    overflow: 'hidden',
    marginBottom: 15,
    borderRadius: 15,
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(23, 23, 27, 0.3)',
  },
  name: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  pokemon: {
    width: 115,
    height: 115,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  pokeball: {
    opacity: 0.15,
    width: 150,
    height: 150,
    position: 'absolute',
    right: -15,
    bottom: -15,
    tintColor: '#FFF',
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  type: {
    color: '#FFF',
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 5,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});