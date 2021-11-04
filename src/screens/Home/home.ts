import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.light, theme.colors.semiDark],
}))`
  flex: 1;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.dark};
  margin: ${width * 0.04}px;
`;

export const Photo = styled.TouchableOpacity`
  height: ${({ theme }) => theme.layout.item_height}px;
  width: ${({ theme }) => theme.layout.item_width}px;
  margin: ${({ theme }) => theme.layout.spacing}px;
`;

export const Wrap = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: ${width * 0.06}px;
`;

export const Image = styled(Animated.Image)`
  width: 100%;
  height: 100%;
`;

export const Name = styled(Animated.Text)`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.superDark};
  background-color: ${({ theme }) => theme.colors.superLight};
  padding: ${width * 0.02}px;
  align-self: center;
  margin-top: ${height * 0.02}px;
  border-radius: ${width * 0.04}px;
`;
