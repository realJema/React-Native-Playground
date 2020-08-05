import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View, FlatList, ActivityIndicator, Dimensions} from 'react-native';

// import components 
import Cards from './Cards';

export default class World extends Component {
    //Define your state for your component. 
    state = {
    //Assing a array to your pokeList state
    posts: [],
    //Have a loading state where when data retrieve returns data. 
    loading: true
  }
  
  /* async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const news = await fetch('https://jemaapi.free.beeceptor.com/cnn');
            const theNews = await news.json();
            this.setState({posts: theNews.articles, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
  }; */
    render() {
      
        return (
          <View style={styles.container}>
            <Text style={styles.presentation}>
              This are the latest news in the city
            </Text>
            <ScrollView>
              {!this.state.loading ? (
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={this.state.posts}
                  renderItem={({ item }) => (
                    <Cards
                      key={item._id}
                      title={item.title}
                      subs={item.snippet}
                    />
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
    fontWeight: "bold",
  },
  header_text: {
    padding: 20,
    opacity: 0.7,
  },
});


