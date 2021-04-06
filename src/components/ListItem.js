import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const POSTERURI = 'https://image.tmdb.org/t/p/w185';

const gridViewDisabled = (poster, title) => {
  const posterPath = POSTERURI + poster;
  return (
    <TouchableOpacity style={[styles.container, listStyles.container]}>
      <Image style={listStyles.img} source={{uri: posterPath}} />
      <View style={listStyles.rightView}>
        <Text style={listStyles.title}>{title}</Text>
        <View>
          <Text style={listStyles.detail}>Year</Text>
          <Text style={listStyles.detail}>Language</Text>
        </View>
        <Text style={listStyles.detail}>Genre Array</Text>
        <View style={listStyles.rateView}>
          <Text style={listStyles.rateViewText}>Rate Count</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const gridViewEnabled = (poster, title) => {
  const posterPath = POSTERURI + poster;
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: posterPath}} style={gridStyles.img} />
      <Text style={gridStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const ListItem = ({isGrid, poster, title}) => {
  return isGrid
    ? gridViewEnabled(poster, title)
    : gridViewDisabled(poster, title);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
});

const listStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  rightView: {
    flex: 1,
    flexWrap: 'nowrap',
    marginLeft: 20,
  },
  img: {
    height: 220,
    width: '50%',
    borderRadius: 10,
    marginLeft: -15,
  },
  title: {
    color: 'gray',
    fontSize: 18,
    marginBottom: 10,
  },
  detail: {
    color: 'gray',
  },
  rateView: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 50,
  },
  rateViewText: {
    textAlign: 'center',
    color: 'white',
  },
});

const gridStyles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    color: 'gray',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ListItem;
