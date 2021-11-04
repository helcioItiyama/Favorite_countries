import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import Header from '../../components/Header/Header';
import theme from '../../global/styles/theme';
import { MainStack } from '../../routes/Route';
import { countries } from '../../services/data';

import { Container, Text, Photo, Wrap, Image, Name } from './home';

interface IHome {
  navigation: MainStack;
}

const Home = ({ navigation }: IHome) => {
  const { full_size, item_width } = theme.layout;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Header title="SIGHTSEEINGS" />
      <Text>Countries to Travel:</Text>
      <Animated.FlatList
        horizontal
        snapToInterval={theme.layout.full_size}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        showsHorizontalScrollIndicator={false}
        data={countries}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * full_size,
            index * full_size,
            (index + 1) * full_size,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [item_width, 0, -item_width],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
          });
          return (
            <Photo onPress={() => navigation.push('PhotoDetails', { item })}>
              <SharedElement
                id={`item.${item.id}.photo`}
                style={StyleSheet.absoluteFillObject}
              >
                <Wrap>
                  <Image
                    resizeMode="cover"
                    style={{ transform: [{ scale }] }}
                    source={{ uri: item.image_url }}
                  />
                </Wrap>
              </SharedElement>
              <SharedElement id={`item.${item.id}.location`}>
                <Name style={{ transform: [{ translateX }] }}>
                  {item.country}
                </Name>
              </SharedElement>
            </Photo>
          );
        }}
      />
    </Container>
  );
};

export default Home;
