import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-gesture-handler';

export const PokeCard = ({ pokemon }) => {
  const navigation = useNavigation();

  const handleDetails = (pokemonInfo) => {
    navigation.navigate('Details', { pokemonInfo })
  }

  return (
    <TouchableOpacity activeOpacity={0.7} style={[card.container]}>
      <Text style={card.id} numberOfLines={1}>
        {pokemon.name.toString().padStart(4, '#000')}
      </Text>
      <View>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', paddingBottom: 5 }}>NASCIMENTO</Text>
        <Text>Data: {pokemon.birth_year}</Text>
        <Text>Planeta: {pokemon.homeworld}</Text>
      </View>
      <View>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', paddingBottom: 5 }}>DESCRIÇÃO FISICA </Text>
        <Text>ESPÉCIE: </Text>
        <Text>Altura: {pokemon.height} METRO</Text>
      </View>
      <View>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', paddingBottom: 5 }}>VEICULOS USADOS</Text>
        <Text>{pokemon.vehicles}</Text>
      </View>
      <View>
        <View>
          <Button title='VER DETALHES' color={'#FFE81F'} />
        </View>
      </View>
    </TouchableOpacity >
  );
};


const card = StyleSheet.create({
  container: {
    height: 290,
    padding: 20,
    overflow: 'hidden',
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#606060'
  },
  button: {
    backgroundColor: '#FFE81F'
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFE81F',
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