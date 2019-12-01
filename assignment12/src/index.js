import React, {Component} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types'
let PRODUCTS = [
    {"id": 1, "category": "Smart Home", "price": "$70.99", "name": 'Door Lock'},
    {"id": 2, "category": "Smart Home", "price": "$139.99", "name": 'Thermostat'},
    {"id": 3, "category": "Smart Home", "price": "$125.90", "name": 'Security System'},
    {"id": 4, "category": "Furniture", "price": "$369.00", "name": 'Recliner'},
    {"id": 5, "category": "Furniture", "price": "$100.00", "name": 'Ottoman'},
    {"id": 6, "category": "Furniture", "price": "$800.00", "name": 'Chaise Lounge'}
]

const ProductInfo = ({name, price, deleteProduct}) => {
    return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{deleteProduct}</td>
            </tr>
    )
}

const Filter  = () => {
    return (
        <input type="search" onChange = {this.filterResults} placeholder="Search..." />
    )
}

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
                <input type="search" onChange = {this.filterResults} placeholder="Search..." />
                <table id = "products">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    {this.state.filtered
                    ? <tbody>
                        {this.state.data.map(
                        (product, i) =>
                        <ProductInfo
                                key = {i}
                                name = {product.name}
                                price ={product.price}
                                deleteProduct = {<button onClick = {this.handleDelete}>x</button>} 
                        /> 
                        )}
                    </tbody>
                    :<tbody>
                        {products.map (
                            (product, i) =>
                            <ProductInfo
                                    key = {i}
                                    name = {product.name}
                                    price ={product.price}
                                    deleteProduct = {<button onClick = {this.handleDelete}>x</button>} 
                            />
                        )}
                    </tbody>
                }            
                </table>
                <h3>Enter a new product</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name<br/>
                        <input type="text" value = {this.state.name} onChange = {this.handleChange} />
                    </label><br/>
                    <label>
                        Category<br/>
                        <input type="text" value = {this.state.category} onChange = {this.handleCategoryChange} />
                    </label><br/>

                    <label>
                        Price<br/>
                        <input type="text" value = {this.state.price} onChange = {this.handlePriceChange} />
                    </label><br/>
                    <input type="submit" value = "submit" />
                </form>
            </div>
        )
    }
}

Products.propTypes = {
    products:PropTypes.array
}
render(<Products
    products={PRODUCTS}/>, document.getElementById('root'));

