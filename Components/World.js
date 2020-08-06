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

export default class World extends Component {
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
        "http://127.0.0.1:5000/native/api/news/data/filter",
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
          body: JSON.stringify({ category: "world" }),
        }
      );
      const theNews = await news.json();
      var updateNews = this.state.posts.concat(theNews);
      // console.log(updateNews);
      this.setState({ posts: updateNews, loading: false });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_text}>
          <Text style={styles.presentation}>World News</Text>
          <Text>
            World news or international news or even foreign coverage is the
            news media jargon for news from abroad, about a country or a global
            subject. For journalism,
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
