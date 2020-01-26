import React ,{ useState } from 'react'; 

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Icon from '@expo/vector-icons/MaterialIcons'; 
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import { SafeAreaView, Container, Content, Card, CardHeader, MoneyCard, ButtonVisibility, TextMoney, CardContent, CardFooter,  Title, Description, DescriptionEmpty,  Annotation } from './styles'; 

export default function Main() {
  let offset = 0; //store quantity px user moved
  const [showValue, setShowValue] = useState(true);
  let visibility;
  let description;
  if (showValue) {
    visibility = <Icon name="visibility" size={28} color="#666" />
    description = <Description>R$ 10.000,00</Description>
  } else {
    visibility =  <Icon name="visibility-off" size={28} color="#666" />
    description = <DescriptionEmpty />
  }

  //use animated for update css
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,          
        },
      },
    ],
    { useNativeDriver: true }
  );
  
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translateY } = event.nativeEvent;

      offset += translateY; 

      translateY.setOffset(offset);
      translateY.setValue(0);

      if (translateY >= 100){
        opened = true;
      } else { 
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380: 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return(    
    <SafeAreaView>
      <Container>
        <Header/>               
        <Content>
          <Menu translateY={translateY} />
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350 , 0,380],
                  outputRange: [-50 , 0,380],
                  extrapolate: 'clamp' // not permission extrapolate range define in inputRange and outputRange
                }),
              }],
            }}>
                <CardHeader>
                  <MoneyCard>
                    <Icon name="attach-money" size={28} color="#666" />              
                    <TextMoney>NuConta</TextMoney>
                  </MoneyCard>
                  <ButtonVisibility onPress={() => setShowValue(!showValue)}>
                    {visibility}
                  </ButtonVisibility>
                </CardHeader>   
                <CardContent>
                  <Title>Saldo disponível</Title>
                  {description}                
                </CardContent>
                <CardFooter>
                  <Icon name="monetization-on" size={28} color="#820eb7"/>
                  <Annotation>                
                    Transferência de R$ 100,00 recebida segunda
                  </Annotation>
                </CardFooter>
              </Card>
            </PanGestureHandler>
          </Content>   
        <Tabs translateY={translateY}/>
      </Container>
    </SafeAreaView>
  );
}