import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
} from 'react-native';
import {Header, ImageCard} from './components/uikit';

export default class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Eldar_poisk.com',
      data: [],
      url: 'http://api.tvmaze.com/search/shows?q=',
      searchText: '',
      errorMessage: '',
    };
  }

  async componentDidMount() {
    await this.Method('Spider Man');
  }

  Method = async (par) => {
    try {
      const response = await fetch(this.state.url + par);
      const array = await response.json();

      if (array.length) {
        this.setState({data: array, errorMessage: ''});
      } else {
        this.setState({errorMessage: 'there is no such movie'});
      }
    } catch (e) {
      this.setState({
        errorMessage: 'Something went wrong, try again later',
      });
    }
  };

  onChangeText(text) {
    this.setState({
      searchText: text,
    });
  }

  Search = async (str) => {
    await this.Method(str);
    Keyboard.dismiss();
  };

  render() {
    const {title, data, searchText} = this.state;
    const isMovieExist =
      this.state.errorMessage !== '' ? (
        <Text style={{backgroundColor: 'red'}}>{this.state.errorMessage}</Text>
      ) : (
        data.map((item, index) => <ImageCard data={item} key={index} />)
      );
    return (
      <View style={{flex: 1, backgroundColor: '#99917c'}}>
        <Header title={title} />
        <View style={styles.row}>
          <TextInput
            style={styles.textInputs}
            placeholder="Write something to start search"
            onChangeText={(text) => this.onChangeText(text)}
            value={searchText}
          />

          <TouchableOpacity
            style={{flex: 0.15}}
            onPress={() => this.Search(searchText)}>
            <Text style={styles.button}>&#128270;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.container}>{isMovieExist}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 100,
  },
  row: {
    flexDirection: 'row',
  },
  textInputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 0.9,
    backgroundColor: '#dedae3',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    fontSize: 30,
    backgroundColor: '#dedae3',
  },
});
