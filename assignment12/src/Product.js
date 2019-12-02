/* Name: Sanchita Kanade
    Instructor Name: Zak Ruvalcaba
    Class: CS648.01 Modern Web Development Frameworks Fall 2019
    File: Product.js
   Assignment No.: 12
*/

import PropTypes from 'prop-types'
import React, {Component} from 'react';
import { Filter } from './Filters'
import { ProductTable } from './ProductTable'
import { ProductForm } from './ProductForm'
import { render } from 'react-dom';

// I have used following array for input data for <Products> component
export let PRODUCTS = [
    {"id": 1, "category": "Smart Home", "price": "$70.99", "name": 'Door Lock'},
    {"id": 2, "category": "Smart Home", "price": "$139.99", "name": 'Thermostat'},
    {"id": 3, "category": "Smart Home", "price": "$125.90", "name": 'Security System'},
    {"id": 4, "category": "Furniture", "price": "$369.00", "name": 'Recliner'},
    {"id": 5, "category": "Furniture", "price": "$100.00", "name": 'Ottoman'},
    {"id": 6, "category": "Furniture", "price": "$800.00", "name": 'Chaise Lounge'}
]

class Products extends Component {
    state = {
        name: "",
        price: "",
        category:"",
        filteredData:[],
        filtered:false
        }

    /*
    Following 3 event handlers will set the state of <Products> component when a user
    enters name, category and price to respective text boxes on product form in order
    to add a new product to the product table/list
    */
    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handlePriceChange = e => {
        this.setState({price: e.target.value})
    }

    handleCategoryChange = e => {
        this.setState({category: e.target.value})
    }

    /* This event handler will be called when a user hits Save button on the product form,
    in order to add a new product to our product list.
    This function will add the data entered by user to PRODUCTS array and render the <Products>
    component again with added modified PRODUCTS array.
    After that, it will clear name, category and price text fields on the form automatically.
    */
    handleSubmit = e => {
        PRODUCTS.push({"id": PRODUCTS.length+1,"category":this.state.category, "price": this.state.price, "name":this.state.name})
        render(
        <Products products={PRODUCTS} />,
        document.getElementById('root')
        )
        this.setState({name:'', category:'', price:''})
        e.preventDefault()

    }

    /*
    following method uses parentElement property on 'Delete' button object to retrieve 
    'td' element that conatins the 'Delete' button on which event is performed.
    After that again it will call parentElement property to retrieve the whole row of the
    table, which user wants to delete and finally to delete that row, I have set it's 
    innerHTML to empty string.
    */
    handleDestroy = e => {
        document.getElementById(e.target.id).parentElement.parentElement.innerHTML = ""   
    }    

    /* This event handler will be called when a user searches a product name in search text box
    for filtering out the product list. 
    This function stores products' array from this.props to variable 'productArray',
    then it filters the product array based on product name entered by user and stores 
    result in variable 'filteredProducts'.
    Then, it sets 'filtered' flag to true and add results from filteredProducts to 
    filteredData array. If user clears the search text box, filtered flag will set to false
    and whole product list will display
    */
    handleFilter = e => {
        const productArray =  this.props.products
        const filteredProducts =  productArray.filter(product => product.name === e.target.value)
        this.setState({filtered:true})
        this.setState({filteredData: filteredProducts})
        if(e.target.value === "") {
            this.setState({filtered:false})
        }
        e.preventDefault()
      }
      
    render() {
        const { products } = this.props
        return (
            <div>
                <h2 class ="col-md-6">My Inventory</h2>
                <Filter handleFilter = {this.handleFilter}/>
                
                <ProductTable 
                productList = {products}
                filtered =  {this.state.filtered}
                filteredData = {this.state.filteredData}
                deleteProduct = {this.handleDestroy} />

                <ProductForm 
                name ={this.state.name}
                category = {this.state.category}
                price = {this.state.price}
                nameChange = {this.handleChange}
                categoryChange = {this.handleCategoryChange}
                priceChange = {this.handlePriceChange}
                submit = {this.handleSubmit} />

                <footer class = "col-md-10 my-5 pt-3"><hr/></footer>
            </div>
        )
    }
}

Products.propTypes = {
    products:PropTypes.array
}

export default Products