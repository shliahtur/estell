import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import NewProductList from './NewProductList';

export default () => (

  <React.Fragment>
      <CategoryList/>
      <NewProductList/>
  </React.Fragment>
  );
  