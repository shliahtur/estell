import React, { Component } from 'react';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import NavMenu from './NavMenu';
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import history from '../history';

import '../styles/App.css'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="content-wr">
          <NavMenu />
          <Main />
          <Footer />
          </div>
      </Router>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/products/new" component={ProductAdd} />
    <Route exact path="/products/:id" component={ProductInfo} />
    <Route exact path="/products/:id/edit" component={ProductEdit} />
  </Switch>
);

export default App;