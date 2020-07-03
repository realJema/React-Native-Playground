import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={[styles.outer, styles.white]}>
        <Text style={styles.logo}>Colors</Text>
        <Text style={styles.slogan}>The True meaning</Text>
        <Text>----</Text>
      </View>
      <View style={[styles.outer, styles.red]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>RED</Text>
          <Text style={styles.desc}>
            The color of passion and drama. This color attracts the most
            attention and is associated with strong emotions such as love and
            anger. Red is the color used universally to signify danger, courage,
            strengh and power. Red is stimulating, vibrat and exciting. Red
            inspires desire with a strong link to sexuality and increased
            appetities.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.orange]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>ORANGE</Text>
          <Text style={styles.desc}>
            The color of encouragement. The combination of yellow and red makes
            orange convey excitement, warmth and enthusiasm. Social and
            inviting, this is the color of the extrovert, exuding happiness and
            joy, releasing inhibitions. Need to be inspired into action or have
            a positive outlook on life? Orange is a motivating and encouraging
            color.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.yellow]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>YELLOW</Text>
          <Text style={styles.desc}>
            The color of optimism. Yellow is a compelling color that conveys
            youthful, fresh energy. This color of sunshine is uplifting and
            illuminating and associated with success and confidence. Yellow
            stimulates the left side of the brain, helping with clear thinking
            and quick decision making. Yellow grabs attention because the eye
            sees yellow first.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.pink]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>PINK</Text>
          <Text style={styles.desc}>
            The color of sensitivity – The passion of red combined with the
            purity of white create this color associated with love, tranquillity
            and femininity. Pink has associations with tenderness and nurturing
            while conveying a sense of safety and even vulnerability.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.blue]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>BLUE</Text>
          <Text style={styles.desc}>
            The color of trust. Blue, the shade of the sea and the sky, is
            thought to induce calm and convey tranquillity, serenity and peace.
            The popular color instils confidence and inspires feelings of trust,
            loyalty, integrity and responsibility. Cool blue is conservative and
            can also be perceived as aloof.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.green]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>GREEN</Text>
          <Text style={styles.desc}>
            The color of growth and health. Think of nature and see green in all
            its glory expressing renewal and life. Green has a strong
            association as a refreshing and peaceful color. It evokes feeling of
            abundance and a plentiful environment while providing a restful and
            secure feeling.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.violet]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>VIOLET</Text>
          <Text style={styles.desc}>
            The color of spirituality. The energy of red with the calm of blue
            combine to create violet, a color that inspires reflection and self
            awareness. It is the color of the sensitive, compassionate intuitive
            soul – the introvert. Also, violet has long been associated with
            royalty, and characteristics of quality and luxury.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.brown]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>BROWN</Text>
          <Text style={styles.desc}>
            The color of the earth. Stability and a solid foundation is the
            message that emanates from the color brown. This color relates to
            things that are natural and simple. Brown is thought to be dull, but
            is reliable and wholesome. Although frugal and stingy, brown is a
            color of safety and quiet confidence; warm and reassuring.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.gray]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>GRAY</Text>
          <Text style={styles.desc}>
            The color of compromise. Grey is considered to be an unemotional,
            detatched color seeking to avoid attention. It conveys gloom and
            depression. Very conservative, grey has a stabilizing effect as it
            is very neutral, but can also conjure up feelings of frustration.
            Grey is linked with maturity and protection, being reliable and
            practical.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.black]}>
        <View style={styles.textBlock}>
          <Text style={[styles.title, styles.textWhite]}>BLACK</Text>
          <Text style={[styles.desc, styles.textWhite]}>
            The color of mystery. Black is actually the lack of colour. It
            covers, hides and implies that there is a barrier. A strong and
            powerful color, black is formal and sophisticated, sexy and
            secretive. It is the color of things that are scary and evil. Black
            conveys pessimism and a lack of hope.
          </Text>
        </View>
      </View>
      <View style={[styles.outer, styles.white]}>
        <Text style={styles.logo}>Colors</Text>
        <Text style={styles.slogan}>Thanks for watching!</Text>
        <Text>created by NATIVE</Text>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#007bb6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  textBlock: {
    width: Dimensions.get('window').width - 50,
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
  desc: {
    color: "#fff",
    fontSize: 25,
  },
  logo: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },  
  slogan: {
    fontSize: 15,
  },
  textWhite: {
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
  },
  red: {
    backgroundColor: "red",
  },
  orange: {
    backgroundColor: '#F9A602',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  pink: {
    backgroundColor: 'pink',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: "green",
  },
  violet: {
    backgroundColor: 'violet',
  },
  brown: {
    backgroundColor: 'brown',
  },
  gray: {
    backgroundColor: 'gray',
  },
  black: {
    backgroundColor: 'black',
  },

});
