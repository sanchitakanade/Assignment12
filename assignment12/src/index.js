/* Name: Sanchita Kanade
    Instructor Name: Zak Ruvalcaba
    Class: CS648.01 Modern Web Development Frameworks Fall 2019
    File: index.js
   Assignment No.: 12
*/

import React from 'react';
import { render } from 'react-dom';
import Products from './Product'
import { PRODUCTS } from './Product'

render( <Products products = {PRODUCTS} />,document.getElementById('root'))

