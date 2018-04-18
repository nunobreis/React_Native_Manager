import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDYexBR3nZchEGnpYL2_e5npCrZKnVSBuE',
      authDomain: 'manager-26483.firebaseapp.com',
      databaseURL: 'https://manager-26483.firebaseio.com',
      projectId: 'manager-26483',
      storageBucket: 'manager-26483.appspot.com',
      messagingSenderId: '638593832757'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
