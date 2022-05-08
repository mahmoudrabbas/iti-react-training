import React, { Component } from 'react'
class Admin extends Component {
    state = {  }
    
    addHandler = () => {
        this.props.history.push('/productForm/new');
    }

    render() {
        const style = {cursor: "pointer"}; 
        return (
            <React.Fragment>
                <h2>Admin</h2>
                <button onClick={this.addHandler} className='btn btn-primary'>Add</button>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(this.props)} */}
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td onClick={() => this.props.history.push(`/productForm/${product.id}`)} style={style}><i className="fa-solid fa-pen-to-square"></i></td>
                                <td onClick={() => this.props.deleteHandler(product)} style={style}><i className="fa-solid fa-trash-can"></i></td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Admin;