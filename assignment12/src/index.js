import React from 'react';
import { render } from 'react-dom';
import Products from './Product'
import { PRODUCTS } from './Product'

render( <Products products={PRODUCTS}/>, document.getElementById('root'));

