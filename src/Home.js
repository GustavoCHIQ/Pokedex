import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';

import Api from './services/Api';

import { PokeCard } from './PokeCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 25,
    paddingBottom: 0,
    backgroundColor: '#000000',
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

  useEffect(() => {
    pegarPokemon();
  }, []);

  const pegarPokemon = () => {
    Api.get('/')
      .then(response => {
        setLoading(true);
        setData(response.data.results);
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

      <FlatList
        data={data}
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

  if (loading) {
    return jsxLoading();
  } else {
    return jsxPokemons();
  }
};


