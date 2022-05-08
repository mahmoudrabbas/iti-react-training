import React, { Component } from 'react'
import Product from './product';
class ShopCart extends Component {

    render() { 
        const {resetHandler,products,deleteHandler,IncrementHandler} = this.props;
        return (
            <React.Fragment>
                <h1>Shop cart</h1>
                <button onClick={resetHandler} className='btn btn-secondary btn-sm m-1'>Reset</button>
                {products.filter(p => p.selected !== false).map(product => (
                    <Product key={product.id} product={product} onDelete={deleteHandler} onIncrement={IncrementHandler}/>
                    ))}
            </React.Fragment>
        );
    }
}

export default ShopCart;