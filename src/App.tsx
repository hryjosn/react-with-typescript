import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './reducers/configureStore';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Router /> */}
        <Counter />
      </Provider>

    </>
  );
}

export default App;
