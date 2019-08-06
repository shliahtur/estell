﻿import React, { Fragment } from 'react';
import Home from './Home';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import CallBtn from './CallBtn';
import NavMenu from './NavMenu';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history';
import LoadingBar from './LoadingBar';
import Footer from './Footer';
import Admin from './admin/Admin'
import '../styles/Admin.css'


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const MainLayout = props => (
  <Fragment>
    <div className="content-wr">
      <LoadingBar />
      <CallBtn />
      <NavMenu />
      {props.children}
    </div>
    <Footer />
  </Fragment>
)

const AdminLayout = props => (
  <Fragment>
    <div className="admin-content">
    <LoadingBar />
    {props.children}
    </div>
  </Fragment>
)

const App = () => (
  <Router history={history}>
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={Home} />
      <AppRoute exact path="category/:catname" layout={MainLayout} component={ProductList} />
      <AppRoute exact path="/product/:id" layout={MainLayout} component={ProductInfo} />
      <AppRoute exact path="/products/:id/edit" layout={MainLayout} component={ProductEdit} />
      <AppRoute exact path="/admin" layout={AdminLayout} component={Admin} />
    </Switch>
  </Router>
)


export default App;