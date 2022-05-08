
import React, { Component } from 'react';
class ProductDetails extends Component {
    state = {  } 


    saveHandler = () => {
        this.props.history.push('/cart')
    }

    render() {
        const product = this.props.products.filter( p => p.id === parseInt(this.props.match.params.id))[0];

        return (
            <React.Fragment>
                <h4>Product No.{product.id}</h4>
                <p>Name: {product.name}</p>
                <p>Count: {product.count}</p>
                <button onClick={this.saveHandler} className='btn btn-primary btn-sm'>Edit</button>
            </React.Fragment>
        )
    }
}

export default ProductDetails;