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
 * @return {Array} new state
 * @name handleTagChange 
 * @description send the data to parent component
 * @params newValue
 * @type {closer/method} 
 */

  handleTagChange = newValue => {
    handleTagChange(newValue);
  }

  //Main------------------------------------------------------------------------------

    return (
    <View style={styles.textInputContainer}>
        <Text style={styles.textInputTitle}>search by tag</Text>
        <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={this.handleTagChange}
            value={tag}
        />
    </View>
    );
  }

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5
  },
  textInput: {
    backgroundColor: 'grey',
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
    marginBottom: 5
  },
});