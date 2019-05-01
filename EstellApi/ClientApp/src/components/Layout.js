import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default props => (

  <div class="content-wr">
    <NavMenu />
    {props.children}
    <Footer/>
  </div>
);
