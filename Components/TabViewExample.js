import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
 
import News from './News';
import Politics from './Politics';
import World from './World';

const NewsPage = () => (
  // <News style={styles.scene} />

  <Politics style={styles.scene} />
);

const PoliticsPage = () => (
  <Politics style={styles.scene} />
);

const WorldPage = () => (
  // <World style={styles.scene} />
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
 /* 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
); */
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'news', title: 'Top News' },
    { key: 'world', title: 'World' },
    { key: 'politics', title: 'U.S. Politics' },
  ]);
 
  const renderScene = SceneMap({
    news: NewsPage,
    politics: PoliticsPage,
    world: WorldPage,
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
