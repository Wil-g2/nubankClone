import React from 'react';
import { BackHandler, Alert, Text, View } from 'react-native';


import Icon from '@expo/vector-icons/MaterialIcons'; 
import QRCode from 'react-native-qrcode-svg';
import { Container, Code, InfoAccount, ViewAccount, TextAccount, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) { 
  function handleBackButton() { 
    Alert.alert(
      'Informação',
      'Deseja sair do App ?',
      [
       
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
);
}
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
      }}>      
        <Code>
          <QRCode 
          value="https://linkedin.com/in/willian-gaudencio-38864312b/"
            size={80}
            backgroundColor="#81269D"
            color="#fff"
          />
      </Code>
      <InfoAccount>
        <ViewAccount>
          <TextAccount>Banco </TextAccount>
          <TextAccount bold={true} >000 - Nu Pagamentos S.A.</TextAccount>
        </ViewAccount>
        <ViewAccount>
          <TextAccount>Agência  </TextAccount>
          <TextAccount bold={true}>0000 </TextAccount>
        </ViewAccount >
        <ViewAccount>
          <TextAccount>Conta </TextAccount> 
          <TextAccount bold={true} >0000000-0</TextAccount>
        </ViewAccount>
      </InfoAccount>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurar NuConta </NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => handleBackButton() }>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container> 
  );
}