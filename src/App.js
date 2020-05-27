import React from 'react';
import NAVBAR from './component/Navbar.js';
import Home from './component/Home';
import Cart from './component/Cart';
import About from './component/About';
import './App.css';
import {Provider} from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <NAVBAR />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/about" component={About}/>
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
