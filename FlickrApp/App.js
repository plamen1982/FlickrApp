import React from "react";
import { StyleSheet, View } from "react-native";
import photos from "./utils/publicPhotos";
import CardList from "./components/CardList";

import Search from "./components/Search";

/**
 * @render react
 * @name App
 * @description
 * <App />
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos
    };
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

  //Helpers-------------------------------------------------------------------------
  /**
   * @return trufy/falsy value
   * @name isTwoStringsMatched
   * @description when two strings are compared return true or false if they have partially matching
   * @type {method}
   */
  isTwoStringsMatched(str1, str2) {
    return str1.toLowerCase().localeCompare(str2.toLowerCase());
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
    const { photos } = this.state;

    let photosAfterSearch = photos.filter(photo => {
      let tag = photo.tag;
      if (this.isTwoStringsMatched(tag, newValue)) {
        return photo;
      }
    });

    this.setState({
      photos: photosAfterSearch
    });
  };

  //Main------------------------------------------------------------------------------

  render() {
    const { photos } = this.state;

    return (
      <View style={styles.appContainer}>
        <Search handleTagChange={this.handleTagChange} />
        <CardList photos={photos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    alignItems: "center"
  }
});
