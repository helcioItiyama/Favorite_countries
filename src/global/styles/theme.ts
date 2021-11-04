import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const size = width * 0.68;
const spacing = width * 0.04;

export default {
  colors: {
    superDark: '#081c15',
    dark: '#1b4332',
    semiDark: '#2d6a4f',
    superMedium: '#40916c',
    medium: '#52b788',
    semiMedium: '#74c69d',
    semiLight: '#95d5b2',
    light: '#b7e4c7',
    superLight: '#d8f3dc',
    textDark: '#000000',
    textWhite: '#FFFFFF',
  },
  fontFamily: {
    regular: ' PatuaOne_400Regular',
  },
  layout: {
    spacing,
    radius: 18,
    full_size: size + spacing * 2,
    item_height: size * 1.5,
    item_width: size,
  },
};
