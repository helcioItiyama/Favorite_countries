import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${width * 0.06}px;
  overflow: hidden;
  margin-horizontal: ${({ theme }) => theme.layout.spacing / 2}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;
