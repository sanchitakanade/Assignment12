/* Name: Sanchita Kanade
	 Instructor Name: Zak Ruvalcaba
	 Class: CS648.01 Modern Web Development Frameworks Fall 2019
	 File: App.js
   Assignment No.: 12
*/
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './Product'
import { PRODUCTS } from './Product'
import { render } from 'react-dom';


function App(productsArray) {
    return (
      <div>
        <Products products = {productsArray}/>
      </div>
    );
}

render( <App productsArray = {PRODUCTS}/>,document.getElementById('root'))

export default App;
