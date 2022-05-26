import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TextInput,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

import Api from './services/Api';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import { PokeCard } from './PokeCard';

const searchBar = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  input: {
    fontSize: 10,
    padding: 20,
    paddingLeft: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
  },
  icon: {
    color: '#747476',
    position: 'absolute',
    left: 20,
    bottom: 22,
    fontSize: 22,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 25,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  imgPokeball: {
    zIndex: -1,
    opacity: 0.025,
    width: 400,
    height: 400,
    position: 'absolute',
    alignSelf: 'center',
    top: -200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 10,
    lineHeight: 15,
    marginTop: 10,
  },
  list: {
    marginTop: 45,
  },
});

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    pegarPokemon();
  }, []);

  const pegarPokemon = () => {
    Api.get('/')
      .then(response => {
        setLoading(true);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const jsxPokemons = () => (
    <View style={styles.container} flex={1}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          Pokédex
        </Text>
        <Text style={styles.text1} numberOfLines={2}>
          Pesquise um Pokemon pelo nome ou usando o numero da National Pokedex.
        </Text>
        <Image
          style={styles.imgPokeball}
          source={require('../assets/pokeball.png')}
        />
      </View>
      <View style={searchBar.container}>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Qual Pokemon você está procurando?"
          style={searchBar.input}
        />
        <Ionicons name="search" size={30} style={searchBar.icon} />
      </View>
      <FlatList
        data={dataFiltrado}
        renderItem={Item}
        style={styles.list} />
    </View>
  );

  const Item = propsItem => {
    return (
      <PokeCard pokemon={propsItem.item} />
    );
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  let dataFiltrado;

  if (q == '') {
    dataFiltrado = data;
  } else {
    dataFiltrado = [];
    let q2 = q.toUpperCase();
    for (let key in data) {
      let texto = `${data[key].name} ${data[key].id}`;
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key]);
      }
    }
  }
  if (loading) {
    return jsxLoading();
  } else {
    return jsxPokemons();
  }
};


