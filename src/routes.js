import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack'; 

import Main from './pages/Main';


const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main, 
      navigationOptions: {
        title: 'NuBank', 
        headerTitleAlign: 'center',
        headerShown: false,    
      }
    },   
  },{
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {        
        backgroundColor: '#81269D',        
      },
    }
  })
); 

export default Routes;