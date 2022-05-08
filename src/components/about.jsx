import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import Company from './company';
import Team from './team';
class About extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>About us</h1>
                <div className='row'>
                    <div className='col-3'>
                        <ul>
                            <li><Link to='/about/company'>Company</Link></li>
                            <li><Link to='/about/team'>Team</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <Switch>
                            <Route path='/about/company' component={Company} />
                            <Route path="/about/team" component={Team} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;