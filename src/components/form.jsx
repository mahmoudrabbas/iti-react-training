import React, { Component } from 'react';
import './form.css';
import Joi from 'joi-browser';
class Form extends Component {

    state = {
        username:'',
        password:'',
        checked:false,
        errors: {}
    }

    schema = {
        username:Joi.string().required(),
        password:Joi.string().required()
    }

    validate = () => {
        const errors = {};
        const state = {...this.state};
        delete state.errors;
        delete state.checked;
        const res = Joi.validate(state, this.schema, {abortEarly:false});
        if(res.error === null) {
            this.setState({errors})
            return null;
        }

        for (const err of res.error.details){
            errors[err.path] = err.message;
            this.setState({errors})
        }
    }

    changeHandler = (e) => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;;
        this.setState(state);
    }
    checkHandler = (e) => {
        let checked = {...this.state.checked};
        checked = e.currentTarget.checked;;
        this.setState({checked});
    }
    submitHandler = (e) => {
        e.preventDefault();
        const res = this.validate();
        if (res.error) return;
        console.log("submit");
    } 
    render() { 
        return (
            <React.Fragment>
                    <form onSubmit={this.submitHandler} className='myForm'>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Email address</label>
                            <input name='username' onChange={this.changeHandler} autoFocus type="text" className="form-control" id="username" />
                            {this.state.errors.username && (<div className='alert alert-danger'>{this.state.errors.username}</div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input  name='password' onChange={this.changeHandler} value={this.state.password} type="password" className="form-control" id="password" />
                            {this.state.errors.password && (<div className='alert alert-danger'>{this.state.errors.password}</div>)}
                        </div>
                        <div className="mb-3 form-check">
                            <input name='checked' onChange={this.checkHandler} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
            </React.Fragment>
        );
    }
}

export default Form;