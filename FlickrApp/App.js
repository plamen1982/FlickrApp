import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import photos from './utils/publicPhotos';



/**
 * @render react
 * @name App
 * @description 
 * <App />
 */

export default class App extends React.Component {

  state = {
    photos,
    searchedTag: '',
  }

//LifeCycle Hooks------------------------------------------------------------------

/**
 * @name componentWillMount 
 * @description when comopnent is already mounted is executed
 * @type {method} 
 */
componentDidMount() {
  const { photos } = this.state;
  photos.forEach(photo => {
    console.log(photo);
  });
}


//Handlers-------------------------------------------------------------------------
/**
 * @return {Array} new state
 * @name handleTagChange 
 * @description filter the state by newValue when matched with searchTag property of the state
 * @params newValue
 * @type {method} 
 */
  handleTagChange = newValue => {
    const { photos } = this.state;
    this.setState({
      photos: photos.filter(photo => {
        const { searchedTag } = photo;
        return searchedTag === newValue;
      })
    });

  }

  render() {
    const { photos: { tag } } = this.state;
    return (
      <View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputTitle}>search by tag</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={this.handleTagChange}
            value={tag}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5
  },
});
