import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import photos from "./utils/publicPhotos";
import Card from "./components/Card";
import CardList from "./components/CardList";

import Search from "./components/Search";
import CardGrid from "./components/CardGrid";

/**
 * @render react
 * @name App
 * @description
 * <App />
 */

const keyExtractor = item => item.photoId.toString();

export default class App extends React.Component {
  state = {
    photos
  };

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

    const { photos } = this.state;

    this.setState({
      photos: photos.filter(photo => {
        const { tag } = photo;
        if (tag.toLowerCase().localeCompare(newValue.toLowerCase())) {
          return photo;
        }
      })
    });
  };


  //Main------------------------------------------------------------------------------

  render() {
    const {
      photos,
      photos: { tag }
    } = this.state;
 
    return (
      <View style={styles.appContainer}>
        <Search tag={tag} handleTagChange={this.handleTagChange} />
        <CardList photos={photos}/>
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
