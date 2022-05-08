import React, { Component } from 'react';
import axios from 'axios';
class ProductForm extends Component {
    state = {
        id:'',
        name: '',
        price: '',
    }

    componentDidMount = async () => {
        const id= this.props.match.params.id;
        if(id !== 'new'){
            const {data} = await axios.get(`http://localhost:3000/products/${id}`);
            let state = {...this.state};
            state.id = data.id;
            state.name = data.name;
            state.price = data.price;
            this.setState(state);
        }
    }
    handleChange = (e) => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        //add
        if(this.props.match.params.id === 'new') {
            const product = {...this.state, "count":1, "selected":false};
            await axios.post('http://localhost:3000/products', product);
        }else {
            const obj = {...this.state, count: 1, selected: false};
            delete obj.id;
            await axios.put(`http://localhost:3000/products/${this.props.match.params.id}`, obj)
        }
        this.props.history.push('/admin')
    }
    render() { 
        return (
            <React.Fragment>
                <h2>{this.props.match.params.id === 'new'? "Add product": "Edit product"}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={this.handleChange} value={this.state.name} name='name' type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input onChange={this.handleChange} value={this.state.price} name='price' type="text" className="form-control" id="price" />
                    </div>
                    <button type="submit" className="btn btn-primary">{this.props.match.params.id === 'new'? "Add": "Edit"}</button>
                </form>
            </React.Fragment>
        );
    }
}

export default ProductForm;
