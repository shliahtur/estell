import React, { Fragment } from 'react';
import Home from './Home';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import CallBtn from './CallBtn';
import NavMenu from './NavMenu';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history';
import LoadingBar from './Helpers/LoadingBar';
import WhereToBuy from './whereToBuy/WhereToBuy';
import Stores from './whereToBuy/Stores';
import Ecommerce from './whereToBuy/Ecommerce';
import Footer from './Footer';
import Admin from './admin/Admin';
import SideBar from './admin/SideBar';
import Rozetka from './admin/Rozetka';

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
    <SideBar url={history.location.pathname}/>
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
      <AppRoute exact path="/where-to-buy" layout={MainLayout} component={WhereToBuy} />
      <AppRoute exact path="/stores" layout={MainLayout} component={Stores} />
      <AppRoute exact path="/e-commerce" layout={MainLayout} component={Ecommerce} />
      <AppRoute exact path="/products/:id/edit" layout={MainLayout} component={ProductEdit} />
      <AppRoute exact path="/admin" layout={AdminLayout} component={Admin} />
      <AppRoute exact path="/admin/rozetka" layout={AdminLayout} component={Rozetka} />
    </Switch>
  </Router>
)


export default App;