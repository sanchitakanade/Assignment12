/* Name: Sanchita Kanade
    Instructor Name: Zak Ruvalcaba
    Class: CS648.01 Modern Web Development Frameworks Fall 2019
    File: ProductTable.js
   Assignment No.: 12
*/
import React from 'react';
import { ProductRow } from './ProductRow'

/* This function renders the product table.
   when 'filtered' flag is set to true, it will render data from 'filteredData' array
   otherwise data will be rendered from 'productList' array
*/
export const ProductTable = ({productList, filtered, filteredData, deleteProduct}) => {
    return (
        <div class="col-md-6">
            <table id = "products" class = "table table-striped">
                <thead class = "thead-dark">
                    <tr>
                        <th scope = "col">Name</th>
                        <th scope ="col">Category</th>
                        <th scope ="col">Price</th>
                        <th scope ="col"></th>
                    </tr>
                </thead>
                {filtered
                ? <tbody>
                    {filteredData.map(
                        (product, i) =>
                        <ProductRow
                        key = {i}
                        name = {product.name}
                        category = {product.category}
                        price ={product.price}
                        deleteProduct = {<button type = {"button"} id = {i} onClick = {deleteProduct} class = {["btn btn-info"]}>Delete</button>} 
                        /> 
                    )}
                </tbody>
                :<tbody>
                    {productList.map (
                        (product, i) =>
                        <ProductRow
                        key = {i}
                        name = {product.name}
                        category = {product.category}
                        price ={product.price}
                        deleteProduct = {<button id = {i} onClick = {deleteProduct} class = {["btn btn-info"]}>Delete</button>} 
                        />
                    )}
                </tbody>
                }            
            </table>
        </div>
    )
}
