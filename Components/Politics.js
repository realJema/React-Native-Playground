import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";

// import components
import Cards from "./Cards";

export default class Politics extends Component {
  //Define your state for your component.
  state = {
    //Assing a array to your pokeList state
    posts: [],
    //Have a loading state where when data retrieve returns data.
    loading: true,
  };
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const news = await fetch(
        "https://native-news-app.herokuapp.com/native/api/news/filter",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({ category: "politics" }),
        }
      );
      const theNews = await news.json();
      var updateNews = this.state.posts.concat(theNews);
      // console.log(updateNews);
      this.setState({ posts: updateNews, loading: false });
    } catch (err) {
      console.log("Error fetching data-----------\n", err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_text}>
          <Text style={styles.presentation}>Politics</Text>
          <Text>
            Politics is a multifaceted word. It may be used positively in the
            context of a "political solution" which is compromising and
            non-violent,or descriptively as "the art or science of
            government", but also often carries a negative connotation
          </Text>
        </View>
        <ScrollView>
          {!this.state.loading ? (
            <FlatList
              keyExtractor={(item) => item._id.toString()}
              data={this.state.posts}
              renderItem={({ item }) => <Cards key={item._id} data={item} />}
            />
          ) : (
            <ActivityIndicator style={styles.loader} />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  presentation: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_text: {
    padding: 20,
    opacity: 0.7,
  },
});
