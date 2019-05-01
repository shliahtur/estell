import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default props => (

  <React.Fragment>
    <NavMenu />
    {props.children}
    <Footer/>
  </React.Fragment>
);
