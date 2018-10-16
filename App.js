import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './stores';

// let store = createStore(allReducers)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL);
}
  render() {
      return (
        <Provider store={store}>
          <Home/>
        </Provider>
      );
    }
}

