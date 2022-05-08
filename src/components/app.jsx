import React, { Component } from 'react'
import { Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import './app.css'
import ShopCart from './shopCart';
import Home from './home';
import About from './about';
import Contact from './contact';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';
import Form from './form';
import axios from 'axios';
import Admin from './admin';
import ProductForm from './productForm';
import {toast, ToastContainer} from 'react-toastify';
class App extends Component {
    state = {
        products: [
        ]
    }
    IncrementHandler = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].count++;
        this.setState({products})
    } 
    resetHandler = () => {
        let products = [...this.state.products];
        products = products.map(p => {
            p.count = 0;
            return p;
        })
        this.setState({products});
    }
    selectHandler = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].selected = !products[index].selected;
        this.setState({products});
    } 
    componentDidMount = async () => {
        const {data} = await axios.get('http://localhost:3000/products');
        this.setState({products: data})
        
    }
    deleteHandler = async (product) => {
        const oldProducts = [...this.state.products];
        const products = [...this.state.products];
        const newProducts = products.filter(p => p.id !== product.id);
        this.setState({products:newProducts});
        try {
            await axios.delete(`http://localhost:3000/products/${product.id}d`);
        } 
        catch(ex){
            toast.dark("can't delete");
            this.setState({products:oldProducts})
        }
    }
    render() { 
        return (
            <React.Fragment>
                <ToastContainer />
                <Navbar count={this.state.products.length} />
                <div className="main container">
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/menu' component={(props) => <Menu {...props} products={this.state.products} selected={this.selectHandler} />} />
                        <Route path='/about' component={About} />
                        <Route path='/productForm/:id' component={(props) => (<ProductForm {...props} products={this.state.products} />)}  />
                        <Route path='/form' component={Form} />
                        <Route path='/admin' render={(props) => (<Admin {...props} products={this.state.products} selected={this.selectHandler} deleteHandler={this.deleteHandler} />)} />
                        <Route path='/notFound' component={NotFound} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/products/:id' component={(props) => <ProductDetails {...props} products={this.state.products}/>} />
                        <Route path='/cart' component={(props) => <ShopCart {...props} products={this.state.products} IncrementHandler={this.IncrementHandler} deleteHandler={this.selectHandler}  resetHandler={this.resetHandler} />} />
                        <Route path='/' exact component={Home} />
                        <Redirect to='/notFound'/>
                    </Switch>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default App;