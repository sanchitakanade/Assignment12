import React from 'react';
import { ProductRow } from './ProductRow'
export const ProductTable = ({productList, filtered, data, deleteProduct}) => {
    return (
        <table id = "products">
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            {filtered
            ? <tbody>
                {data.map(
                    (product, i) =>
                    <ProductRow
                    key = {i}
                    name = {product.name}
                    price ={product.price}
                    deleteProduct = {<button onClick = {deleteProduct}>x</button>} 
                    /> 
                )}
            </tbody>
            :<tbody>
                {productList.map (
                    (product, i) =>
                    <ProductRow
                    key = {i}
                    name = {product.name}
                    price ={product.price}
                    deleteProduct = {<button onClick = {deleteProduct}>x</button>} 
                    />
                )}
            </tbody>
            }            
        </table>
    )
}
