import React from 'react';
import { render } from 'react-dom';

let PRODUCTS = {
    '1':{id: 1, category: 'Smart Home', price: '$70.99', name: 'Door Lock'},
    '2':{id: 2, category: 'Smart Home', price: '$139.99', name: 'Thermostat'},
    '3':{id: 3, category: 'Smart Home', price: '$125.90', name: 'Security System'},
    '4':{id: 4, category: 'Furniture', price: '$369.00', name: 'Recliner'},
    '5':{id: 5, category: 'Furniture', price: '$100.00', name: 'Ottoman'},
    '6':{id: 6, category: 'Furniture', price: '$800.00', name: 'Chaise Lounge'},
};

const Inventory = ({ProductOneName, ProductOnePrice, ProductTwoName, ProductTwoPrice,ProductFivePrice,
ProductThreeName, ProductThreePrice, ProductFourName, ProductFourPrice, ProductFiveName,
ProductSixName,ProductSixPrice}) => {
    return (
        <main>        
            <input type="search" placeholder="Search..."></input>
            <table>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{ProductOneName}</td>
                    <td>{ProductOnePrice}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{ProductTwoName}</td>
                    <td>{ProductTwoPrice}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{ProductThreeName}</td>
                    <td>{ProductThreePrice}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{ProductFourName}</td>
                    <td>{ProductFourPrice}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{ProductFiveName}</td>
                    <td>{ProductFivePrice}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{ProductSixName}</td>
                    <td>{ProductSixPrice}</td>
                    <td></td>
                </tr>
            </table>
        </main>

    )
} 

render(<Inventory
    ProductOneName = {PRODUCTS[1].name} 
    ProductOnePrice = {PRODUCTS[1].price}
    ProductTwoName = {PRODUCTS[2].name}
    ProductTwoPrice = {PRODUCTS[2].price}
    ProductThreeName = {PRODUCTS[3].name}
    ProductThreePrice = {PRODUCTS[3].price}
    ProductFourName = {PRODUCTS[4].name}
    ProductFourPrice = {PRODUCTS[4].price}
    ProductFiveName = {PRODUCTS[5].name}
    ProductFivePrice = {PRODUCTS[5].price}
    ProductSixName = {PRODUCTS[6].name}
    ProductSixPrice = {PRODUCTS[6].price}/>, document.getElementById('root'));

