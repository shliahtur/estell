import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import NewProductList from './NewProductList';
import WhereToBuy from './whereToBuy/WhereToBuy';

export default () => (

  <React.Fragment>
      <CategoryList/>
      <NewProductList/>
      <WhereToBuy/>
  </React.Fragment>
  );
  