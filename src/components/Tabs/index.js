import React from 'react'; 

import { Container, TabContainer, TabItem, TabText } from './styles'; 
import Icon from '@expo/vector-icons/MaterialIcons'; 

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      })
    }}> 
        <TabContainer>
          <TabItem>
            <Icon name="credit-card" size={24} color="#fff"/>
            <TabText>Função débito</TabText>
          </TabItem>
          <TabItem>
            <Icon name="aspect-ratio" size={24} color="#fff"/>
            <TabText>Recarga de celular</TabText>
          </TabItem>
          <TabItem>
            <Icon name="monetization-on" size={24} color="#fff"/>
            <TabText>Empréstimos</TabText>
          </TabItem>
          <TabItem>
            <Icon name="help-outline" size={24} color="#fff"/>
            <TabText>Me Ajuda</TabText>
          </TabItem>
           <TabItem>
            <Icon name="person-add" size={24} color="#fff"/>
            <TabText>Indicar amigos</TabText>
          </TabItem>
          <TabItem>
            <Icon name="format-align-right" size={24} color="#fff"/>
            <TabText>Pagar</TabText>
          </TabItem>
          <TabItem>
            <Icon name="local-atm" size={24} color="#fff"/>
            <TabText>Cobrar</TabText>
          </TabItem>
          <TabItem>
            <Icon name="attach-money" size={24} color="#fff"/>
            <TabText>Deposistar</TabText>
          </TabItem>
          <TabItem>
            <Icon name="vertical-align-bottom" size={24} color="#fff"/>
            <TabText>Ajuste limite</TabText>
          </TabItem>
          <TabItem>
            <Icon name="arrow-upward" size={24} color="#fff"/>
            <TabText>Transferir</TabText>
          </TabItem>
          <TabItem>
            <Icon name="lock" size={24} color="#fff"/>
            <TabText>Bloquear Cartão</TabText>
          </TabItem>
          <TabItem>
            <Icon name="image-aspect-ratio" size={24} color="#fff"/>
            <TabText>Cartão virtual</TabText>
          </TabItem>
          <TabItem>
            <Icon name="sort" size={24} color="#fff"/>
            <TabText>Organizar atalhos</TabText>
          </TabItem>
        </TabContainer>
    </Container>
  );
}

