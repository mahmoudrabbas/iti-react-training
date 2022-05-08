import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Product extends Component {

    
    getClass(){
        if(this.props.product.count <= 2){
            return 'badge bg-warning m-2';
        }else if(this.props.product.count < 4){
            return 'badge bg-danger m-2';
        }else{
            return 'badge bg-primary m-2';
        }
    }


    // componentDidMount() {
    //     console.log("inside child componentDidMount");
    // }

    // componentWillUnmount() {
    //     console.log("inside child componentWillUnmount");
    // }
    
    render() { 
        // console.log("inside child render");
        return (
            
            <div className='row'>
                <div className='col-2'>
                    <Link to={`/products/${this.props.product.id}`} className='btn' >{this.props.product.name}</Link>
                </div>
                <div className='col'>
                    <span className={this.getClass()}>{this.props.product.count}</span>
                    <button onClick={() => this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                    <button onClick={() => this.props.onDelete(this.props.product)} className='btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        );
    }
}

export default Product;