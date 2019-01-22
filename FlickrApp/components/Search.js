import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

/**
 * @render react
 * @name App
 * @description Stateless Component
 * <Search />
 */

export default function Search({ tag, handleTagChange } ) {

//Handlers-------------------------------------------------------------------------

/**
 * @name handleTagChange 
 * @description send the data to parent component
 * @params newValue
 * @type {closer/method} 
 */

  handleTagChange = newValue => {
    handleTagChange(newValue);
  }

    return (
    <View style={styles.textInputContainer}>
        <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={this.handleTagChange}
            value={tag}
            placeholder="seatch by tag"
        />
    </View>
    );
  }

const styles = StyleSheet.create({
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 30,
  },
  textInput: {
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    borderRadius: 7,
    borderColor: "white",
    borderWidth: 2,
  },
});