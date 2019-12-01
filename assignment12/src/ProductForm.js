import React from 'react';

export const ProductForm = ({name, category, price, nameChange, categoryChange, priceChange, submit}) => {
    return(
        <div>
            <h3>Enter a new product</h3>
            <form onSubmit={submit}>
                <label>
                    Name<br/>
                    <input type="text" value = {name} onChange = {nameChange} />
                </label><br/>
                <label>
                    Category<br/>
                    <input type="text" value = {category} onChange = {categoryChange} />
                </label><br/>

                <label>
                    Price<br/>
                    <input type="text" value = {price} onChange = {priceChange} />
                </label><br/>
                <input type="submit" value = "submit" />
            </form>
        </div>
    )
}
