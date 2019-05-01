import React from 'react';
import NavMenu from './NavMenu';

export default props => (

  <React.Fragment>
    <NavMenu />
    {props.children}
  </React.Fragment>
);
