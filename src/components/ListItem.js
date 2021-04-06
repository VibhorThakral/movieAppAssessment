import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const POSTERURI = 'https://image.tmdb.org/t/p/w185';

const getRating = rating => {
  if (rating >= 7) {
    return 'green';
  } else if (rating > 4 && rating < 7) {
    return 'rgba(255,255,0,0.5)';
  } else {
    return 'red';
  }
};

const gridViewDisabled = (
  poster,
  title,
  rating,
  language,
  releaseDate,
  genres,
) => {
  const year = releaseDate.substr(0, releaseDate.indexOf('-'));
  console.log(poster);
  const posterPath = POSTERURI + poster;
  return (
    <TouchableOpacity style={[styles.container, listStyles.container]}>
      {poster === null ? (
        <Icon name="image-off-outline" size={50} color="white" />
      ) : (
        <Image style={listStyles.img} source={{uri: posterPath}} />
      )}

      <View style={listStyles.rightView}>
        <Text style={listStyles.title}>{title}</Text>
        <View style={listStyles.descView}>
          <Text style={listStyles.detail}>{year}</Text>
          <View style={listStyles.borderView} />
          <Text style={listStyles.detail}>{language}</Text>
        </View>
        <Text style={listStyles.detail}>{genres}</Text>
        <View
          style={[listStyles.rateView, {backgroundColor: getRating(rating)}]}>
          <Text style={listStyles.rateViewText}>{rating}</Text>
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

class ListItem extends Component {
  checkGenreType = () => {
    const genres = this.props.genres;
    const allGenres = this.props.genreData;
    const currGenres = [];

    allGenres.map(item => {
      genres.map(ele => item.id === ele && currGenres.push(item.name + '  '));
    });

    return currGenres;
  };

  render() {
    const {isGrid, poster, title, rating, language, releaseDate} = this.props;
    const genres = this.checkGenreType();
    return isGrid
      ? gridViewEnabled(poster, title)
      : gridViewDisabled(poster, title, rating, language, releaseDate, genres);
  }
}

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
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  rateViewText: {
    textAlign: 'center',
    color: 'white',
  },
  descView: {
    flexDirection: 'row',
  },
  borderView: {
    marginHorizontal: 10,
    borderWidth: 0.65,
    borderColor: 'gray',
    height: '70%',
    alignSelf: 'center',
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

const mapStateToProps = state => ({
  genreData: state.home.genresList,
});

export default connect(mapStateToProps)(ListItem);
