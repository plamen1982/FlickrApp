import { ActivityIndicator, Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import React from 'react';

const { width } = Dimensions.get("window");

export default class Card extends React.Component {

  state = {
    loading: true,
  };

//Handlers-------------------------------------------------------------------------

  /**
   * @name handleLoad
   * @description when image is loaded is called, change the state.loading property to false
   * @type method
   * */

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { image, tag } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}
          <Image
            style={styles.image}
            source={image}
            onLoad={this.handleLoad}
          />
          <Text style={styles.text}>Tag: {tag}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 3,
    width: width/1.05,
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 10,
  },
  text: {
      position: 'absolute',
      top: 5,
      left: 5,
      fontSize: 18,
      color: 'skyblue',
      fontWeight: 'bold',
  }
});
