import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View, FlatList, ActivityIndicator, Dimensions} from 'react-native';

// import components 
import Cards from './Cards';

export default class News extends Component {
    //Define your state for your component. 
    state = {
    //Assing a array to your pokeList state
    posts: [],
    //Have a loading state where when data retrieve returns data. 
    loading: true
  }
  
  async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
          const news = await fetch('http://127.0.0.1:5000/native/api/news/data');
          const theNews = await news.json();
          console.log('got data');
          console.log(theNews);
            this.setState({posts: theNews, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
  };
    render() {
      
        return (
          <View style={styles.container}>
            <View style={styles.header_text}>
              <Text style={styles.presentation}>Trending</Text>
              <Text>
                Our community tells real global stories about resistance,
                justice and identity. We've curated, verified and translated
                trending international news since 2005. 
              </Text>
            </View>
            <ScrollView>
              {!this.state.loading ? (
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={this.state.posts}
                  renderItem={({ item }) => (
                    <Cards data={item} />
                  )}
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
    fontWeight: 'bold',
  },
  header_text: {
    padding: 20,
    opacity: 0.7,
  },
});

