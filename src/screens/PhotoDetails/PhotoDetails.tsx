import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MainStack, RootStackParamList } from '../../routes/Route';
import { countryImages } from '../../services/data';
import Photo from '../../components/Photo/Photo';

import { Container, Image, Name, IconWrap, Icon, View } from './photoDetails';

type Route = RouteProp<RootStackParamList, 'PhotoDetails'>;

interface IPhotoDetails {
  navigation: MainStack;
  route: Route;
}

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

const PhotoDetails = ({ navigation, route }: IPhotoDetails) => {
  const {
    item: { id, image_url, country },
  } = route.params;

  function renderPhotos() {
    const chosedCountry = countryImages.find(
      countryImg => countryImg.id === id,
    );
    if (chosedCountry?.id) {
      return (
        <FlatList
          data={chosedCountry.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation={zoomIn}
              duration={700}
              delay={400 + index * 100}
            >
              <Photo img={item} />
            </Animatable.View>
          )}
        />
      );
    }
    return null;
  }

  return (
    <Container>
      <SharedElement
        id={`item.${id}.photo`}
        style={StyleSheet.absoluteFillObject}
      >
        <Image source={{ uri: image_url }} />
      </SharedElement>
      <IconWrap>
        <Icon name="arrowleft" onPress={navigation.goBack} />
      </IconWrap>
      <SharedElement id={`item.${id}.location`}>
        <Name>{country}</Name>
      </SharedElement>
      <View>{renderPhotos()}</View>
    </Container>
  );
};

PhotoDetails.sharedElements = (route: any) => {
  const {
    item: { id },
  } = route.params;
  return [
    {
      id: `item.${id}.photo`,
    },
    {
      id: `item.${id}.location`,
    },
  ];
};

export default PhotoDetails;
