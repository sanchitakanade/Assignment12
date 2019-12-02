/* Name: Sanchita Kanade
    Instructor Name: Zak Ruvalcaba
    Class: CS648.01 Modern Web Development Frameworks Fall 2019
    File: ProductRow.js
   Assignment No.: 12
*/

import React from 'react';

export const ProductRow = ({name,category, price, deleteProduct}) => {
    return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{deleteProduct}</td>
            </tr>
    )
}
