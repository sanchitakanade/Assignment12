import React, {Component} from 'react';
import { render } from 'react-dom';

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


class Inventory extends Component {
    state = {
        name: "",
        price: "",
         rows: [],
        filtered:false,
        data:[]
        }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handlePriceChange = e => {
        this.setState({price: e.target.value})
    }

    handleSubmit = e => {
        PRODUCTS.push({"id": PRODUCTS.length+1,"category":"Furniture", "price": this.state.price, "name":this.state.name})
        render(<Inventory
            products={PRODUCTS}/>, document.getElementById('root'));
        e.preventDefault()

    }
    handleDelete = e => {
        //var rows = document.getElementsByTagName("tr")
      this.setState({rows: document.getElementsByTagName("tr")});
      this.state.rows.map( row => {
        console.log(row.td)
        return <div><td>row.td</td></div>
     })
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
                        Price<br/>
                        <input type="text" value = {this.state.price} onChange = {this.handlePriceChange} />
                    </label><br/>
                    <input type="submit" value = "submit" />
                </form>
            </div>
        )
    }
}

render(<Inventory
    products={PRODUCTS}/>, document.getElementById('root'));

