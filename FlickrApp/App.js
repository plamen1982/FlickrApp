import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import photos from './utils/publicPhotos';
// import case_insensitive_comp  from './utils/helpers';

import Search from './components/Search'; 

/**
 * @render react
 * @name App
 * @description 
 * <App />
 */

export default class App extends React.Component {

  state = {
    photos,
  }

//LifeCycle Hooks------------------------------------------------------------------

/**
 * @name componentWillUpdate 
 * @description when comopnent wiil update it will executed
 * @type {method} 
 */
componentWillUpdate() {
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
    debugger;
    let { photos } = this.state;
    console.log(photos)
    this.setState({
      photos: photos.filter(photo => {
        const { tag } = photo;
        if(tag.toLowerCase().localeCompare(newValue.toLowerCase())) {
          return photo;
        };
      })
    });

  }

  //Main------------------------------------------------------------------------------

  render() {
    const { photos: { tag } } = this.state;
    return (
      <View style={styles.appContainer}>
        <Search 
          tag={tag}
          handleTagChange={this.handleTagChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
});
