import React, {Component, Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import Routes from './src/routes/Routes';

class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#191919');
      StatusBar.setTranslucent(true);
    }
  }

  render() {
    return (
      <Fragment>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
});

export default App;
