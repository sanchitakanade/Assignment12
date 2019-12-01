import React from 'react';

export const ProductRow = ({name, price, deleteProduct}) => {
    return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{deleteProduct}</td>
            </tr>
    )
}
