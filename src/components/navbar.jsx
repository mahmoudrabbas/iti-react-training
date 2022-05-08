import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MRA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/form">Login</NavLink>
                    </div>
                    </div>
                    <span className='badge bg-primary p-2'><i className="fa-solid fa-cart-plus"> {this.props.count}</i></span>
                </div>
            </nav>
        );
    }
}

export default Navbar;