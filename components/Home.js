import { createStackNavigator } from 'react-navigation';
import Container from './Container';
import Account from './Account';
import Detail from './Detail';

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
  'Detail': {
    screen: Detail,
  },
});

export default Home;