import React, { Component, Fragment } from 'react';
import Home from './Home';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import CallBtn from './CallBtn';
import NavMenu from './NavMenu';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import LoadingBar from './LoadingBar';
import '../styles/App.css'
import Footer from './Footer';
import Admin from './admin/Admin'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
            <LoadingBar />
            <Route exact path="/" component={Main}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
      </Router>
    );
  }
}

const Main = () => (
  <Fragment>
    <div className="content-wr">
     <CallBtn />
     <NavMenu />
      <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="category/:catname" component={ProductList} />
    <Route exact path="/product/:id" component={ProductInfo} />
    <Route exact path="/products/:id/edit" component={ProductEdit} />
  </Switch>
  </div>
  <Footer />
  </Fragment>

);


export default App;