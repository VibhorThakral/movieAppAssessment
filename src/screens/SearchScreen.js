import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  text: {
    color: 'white',
  },
});

export default SearchScreen;
