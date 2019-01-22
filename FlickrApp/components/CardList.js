import React from "react";
import { FlatList } from "react-native";

export default function CardList({ photos }) {
    
  renderImageItem = ({ item }) => {
    const { url, tag } = item;

    return (
      <View>
        <Card
          image={{
            uri: url
          }}
          tag={tag}
        />
      </View>
    );
  };
  return (
    <View style={styles.imagesContainer}>
      <FlatList
        data={photos}
        keyExtractor={keyExtractor}
        renderItem={this.renderImageItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
