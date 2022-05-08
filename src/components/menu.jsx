import React, { Component } from 'react'
import Cart from './cart';
class Menu extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td><Cart product={product} selected={this.props.selected} /></td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Menu;