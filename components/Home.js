import { createStackNavigator } from 'react-navigation';
import Container from './Container';
import Account from './Account';

const Home = createStackNavigator({

  'Container': {
    screen: Container,
    // navigationOptions:{
    //   // headerTitle:'container'
    // }
  },
  'Account': {
    screen: Account,
    navigationOptions:{
      headerTitle:'account'
    }
  },
});

export default Home;