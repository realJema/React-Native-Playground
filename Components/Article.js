import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";
import Header1 from "./Header";

const defaultArticle = "5f2a809fc15ecf24aec3d60b";

export default class World extends Component {
  //Define your state for your component.
  state = {
    article: [],
    loadingArticle: true,
  };

  async componentDidMount() {
    try {
      const article = await fetch(
        "http://127.0.0.1:5000/native/api/news/article",
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
          body: JSON.stringify({ articleID: this.props.articleID }),
        }
      );
      const theArticle = await article.json();
      this.setState({ article: theArticle, loadingArticle: false });
    } catch (err) {
      console.log("Error fetching article data-----------\n", err);
    }
  }
  render() {
    return (
      <View>
        {!this.state.loadingArticle ? (
          <View>
            <Header1 />
            <ScrollView>
              <Image source={this.state.article.img} style={styles.hero} />
              <View style={styles.container}>
                <Text style={styles.title}>{this.state.article.title}</Text>
                <Text style={styles.author}>
                  {"By " + this.state.article.author}
                </Text>
                <Text style={styles.date}>
                  {"Uploaded " +
                    this.state.article.date.month +
                    " " +
                    this.state.article.date.day +
                    " " +
                    new Date().getFullYear()}
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginLeft: 4,
                    marginTop: 25,
                    borderBottomColor: "gainsboro",
                    width: 70,
                  }}
                />
                <Text style={styles.description}>
                  {this.state.article.description}
                </Text>
              </View>
            </ScrollView>
          </View>
        ) : (
          <ActivityIndicator style={styles.loader} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  hero: {
    height: 250,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    fontFamily: "sans-serif-thin",
  },
  author: {
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 4,
    paddingTop: 4,
  },
  date: {
    paddingLeft: 4,
    paddingTop: 4,
    fontSize: 10,
  },

  description: {
    fontFamily: "Roboto",
    fontSize: 18,
    paddingTop: 30,
    paddingLeft: 4,
  },
});
