import React from 'react';
import CategoryList from './CategoryList';
import NewProductList from './NewProductList';
import { Link } from 'react-router-dom';

export default () => (

  <React.Fragment>
 <h4><Link style={{position:"fixed", left: "20px"}} to={'/admin'}>Админка</Link></h4>
      <CategoryList/>
      <NewProductList/>
  </React.Fragment>
  );
  