﻿import React, { Component } from 'react';
import Home from './Home';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import NavMenu from './NavMenu';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import LoadingBar from './LoadingBar';
import CallBtn from './CallBtn';

import '../styles/App.css'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <div className="content-wr">
          <LoadingBar/>
          <CallBtn/>
          <NavMenu />
          <Main /> 
          </div>
          <Footer />
        </div>

          
      </Router>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:catname" component={ProductList} />
    <Route exact path="/products/new" component={ProductAdd} />
    <Route exact path="/products/:id" component={ProductInfo} />
    <Route exact path="/products/:id/edit" component={ProductEdit} />
  </Switch>
);

export default App;