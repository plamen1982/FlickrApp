import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

/**
 * @render react
 * @name Search
 * @description
 * <Search />
 */

export default class Search extends React.Component {
  state = {
    tag: ""
  };

  //LifeCycle Hooks------------------------------------------------------------------

  // componentWillUpdate()  {
  //   this.setState({tag: ''})
  // }

  //Handlers-------------------------------------------------------------------------

  /**
   * @name handleTagChange
   * @description send the data to parent component
   * @params newValue
   * @type {closer/method}
   */

  handleTagChange = newValue => {
    console.log(newValue);
    const { handleTagChange } = this.props;

    if (!newValue) {
      return;
    }

    this.setState({ tag: newValue });
    handleTagChange(newValue);
  };

  render() {
    const { tag } = this.state;
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleTagChange}
          value={tag}
          placeholder="search hero/villain by tag"
        />
      </View>
    );
  }
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
