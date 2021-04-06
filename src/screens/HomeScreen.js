import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ListItem from '../components/ListItem';
import jsonData from '../../jsonData.json';
import {connect} from 'react-redux';
import {
  getMovies,
  getOldestMoviesByRelease,
  getLatestMoviesByRelease,
  getLeastPopularMovies,
  getMostPopularMovies,
  getHighestRevenueMovie,
  getLowestRevenueMovie,
  getMovieGenres,
} from '../services/Home/action';
import FilterComponent from '../components/FilterComponent';

// const DATA = jsonData.results;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: false,
      modalVisible: false,
      activeFilter: 'Most Popular',
    };
  }

  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getMovies();
  }

  componentDidUpdate() {
    switch (this.state.activeFilter) {
      case 'Releases':
        return this.props.getLatestMoviesByRelease();
      case 'Old Movies':
        return this.props.getOldestMoviesByRelease();
      case 'Most Popular':
        return this.props.getMostPopularMovies();
      case 'Least Popular':
        return this.props.getLeastPopularMovies();
      case 'Highest Grossing':
        return this.props.getHighestRevenueMovie();
      case 'Least Grossing':
        return this.props.getLowestRevenueMovie();
    }
  }

  changeListView = () => {
    this.setState({
      gridView: !this.state.gridView,
    });
  };

  changeModalView = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  activeFilter = value => {
    this.setState({
      activeFilter: value,
    });
  };

  render() {
    const {gridView, activeFilter} = this.state;
    const movieData = this.props.movieData;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Home</Text>
          <TouchableOpacity onPress={() => this.changeModalView()}>
            <Icon name="filter" color="gray" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.listTopBar}>
            <Text style={styles.listTypeText}>{activeFilter}</Text>
            <TouchableOpacity
              onPress={() => this.changeListView()}
              style={
                gridView ? styles.gridViewActive : styles.gridViewInactive
              }>
              {gridView ? (
                <Icon name="grid" size={25} color="gray" />
              ) : (
                <Icon name="grid" size={25} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <FlatList
            bounces={false}
            data={movieData}
            keyExtractor={item => item.id}
            key={gridView ? 2 : 1}
            style={styles.flatList}
            numColumns={gridView ? 2 : 1}
            renderItem={ele => {
              return (
                <ListItem
                  isGrid={gridView}
                  poster={ele.item.poster_path}
                  title={ele.item.title}
                  releaseDate={ele.item.release_date}
                  language={ele.item.original_language}
                  rating={ele.item.vote_average}
                  genres={ele.item.genre_ids}
                />
              );
            }}
          />
        </View>
        <FilterComponent
          activeFilter={value => this.activeFilter(value)}
          onDismiss={() => this.changeModalView()}
          visible={this.state.modalVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  topBar: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 0.4,
  },
  topBarText: {
    color: 'gray',
    fontSize: 18,
  },
  listWrapper: {
    padding: 15,
  },
  listTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTypeText: {
    fontSize: 22,
    color: 'gray',
  },
  gridViewActive: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 100,
  },
  gridViewInactive: {
    padding: 10,
    borderRadius: 100,
  },
  flatList: {
    marginBottom: 100,
  },
});

const mapStateToProps = state => ({
  movieData: state.home.movieList,
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
  getOldestMoviesByRelease: () => dispatch(getOldestMoviesByRelease()),
  getLatestMoviesByRelease: () => dispatch(getLatestMoviesByRelease()),
  getLeastPopularMovies: () => dispatch(getLeastPopularMovies()),
  getMostPopularMovies: () => dispatch(getMostPopularMovies()),
  getHighestRevenueMovie: () => dispatch(getHighestRevenueMovie()),
  getLowestRevenueMovie: () => dispatch(getLowestRevenueMovie()),
  getMovieGenres: () => dispatch(getMovieGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
