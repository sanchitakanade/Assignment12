import PropTypes from 'prop-types'
import React, {Component} from 'react';
import { Filter } from './Filters'
import { ProductTable } from './ProductTable'
import { ProductForm } from './ProductForm'
import { render } from 'react-dom';

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
        filtered:false,
        data:[],
        deleteFlag: false
        }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handlePriceChange = e => {
        this.setState({price: e.target.value})
    }

    handleCategoryChange = e => {
        this.setState({category: e.target.value})
    }

    handleSubmit = e => {
        PRODUCTS.push({"id": PRODUCTS.length+1,"category":this.state.category, "price": this.state.price, "name":this.state.name})
        render(<Products
            products={PRODUCTS}/>, document.getElementById('root'));
        e.preventDefault()

    }
    handleDelete = e => {
      const cells = document.getElementsByTagName("td")
      console.log(cells.filter(cell => cell === e.target))
     // var deleteButton = 
     // console.log(deleteButton)
     // deleteButton.innerHTML = "";
    }
    
    filterResults = e => {
        const arr = this.props.products
        const filteredProducts =  arr.filter(product => product.name === e.target.value)
        this.setState({filtered:true})
        this.setState({data: filteredProducts})
        if(e.target.value === "") {
            this.setState({filtered:false})
        }
        e.preventDefault()
      }
      
    render() {
        const { products } = this.props
        return (
            <div>
                <h2>My Inventory</h2>
                <Filter filterResults = {this.filterResults}/>
                
                <ProductTable 
                productList = {products}
                filtered =  {this.state.filtered}
                data = {this.state.data}
                deleteProduct = {this.handleDelete} />

                <ProductForm 
                name ={this.state.name}
                category = {this.state.category}
                price = {this.state.price}
                nameChange = {this.handleChange}
                categoryChange = {this.handleCategoryChange}
                priceChange = {this.handlePriceChange}
                submit = {this.handleSubmit} />
            </div>
        )
    }
}

Products.propTypes = {
    products:PropTypes.array
}

export default Products