import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

/**
 * @render react
 * @name Search
 * @description
 * <Search />
 */
  //Handlers-------------------------------------------------------------------------

  /**
   * @name handleTagChange
   * @description send the data to parent component
   * @params newValue
   * @type {closer/method}
   */

export default function Search({ handleTagChange }) {

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={handleTagChange}
        placeholder="search hero/villain by tag"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 30
  },
  textInput: {
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    color: "#001717"
  }
});
