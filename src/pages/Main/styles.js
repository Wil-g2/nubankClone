import { Animated } from 'react-native'; 
import styled from 'styled-components'; 

import Constants from 'expo-constants';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #81269D;
`;

export const Container = styled.View`
  flex:1; 
  background: #81269D;
  /* padding-top: ${Constants.statusBarHeight}px;*/
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1; 
  max-height: 400px; 
  z-index: 5; 
`;

export const Card = styled(Animated.View)`
  flex: 1; 
  background: #fff;
  border-radius: 3px;
  margin: 0 20px; 
  height: 100%;
  position: absolute; 
  top:0; 
  left:0;
  right: 0;

`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const MoneyCard = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const ButtonVisibility = styled.TouchableOpacity`

`;

export const TextMoney = styled.Text`
  font-size: 20px;
  color: #ccc;
`; 

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px; 
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: sans-serif;
  font-size: 14px;
  color: #ccc;  
`;

export const CardFooter  = styled.View`
  flex-direction: row;
  align-items: baseline;
  padding: 20px;
  background: #e8e8e8;
  border-radius: 5px; 
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-family: sans-serif;
  font-size: 32px; 
  margin-top: 3px; 
  color: #333;
`;

export const DescriptionEmpty = styled.Text`
  background: #e8e8e8; 
  padding: 13px;
`;

export const Annotation = styled.Text`
  font-size: 13px; 
  color: #333;
`;