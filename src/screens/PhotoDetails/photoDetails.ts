import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.superDark};
  background-color: ${({ theme }) => theme.colors.superLight};
  padding: ${width * 0.02}px;
  align-self: center;
  margin-top: ${height * 0.06}px;
  border-radius: ${width * 0.04}px;
`;

export const IconWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.semiLight};
  width: ${width * 0.08}px;
  height: ${width * 0.08}px;
  border-radius: ${width * 0.1}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${height * 0.062}px;
  left: ${width * 0.06}px;
  z-index: 2;
`;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  color: theme.colors.superDark,
  size: width * 0.06,
}))``;

export const View = styled.View`
  position: absolute;
  padding-vertical: ${height * 0.04}px;
  background-color: rgba(0, 0, 0, 0.5) px;
  bottom: 0;
  width: 100%;
`;
