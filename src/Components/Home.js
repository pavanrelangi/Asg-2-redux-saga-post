
import React from 'react';
import './index.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import { APIHoc } from '../Redux/ConnectedComponents/ApiConnected';
import {PostHoc} from './PostData';

class Home extends React.Component{
    render(){
        return (
    <Router>
            <div id="container">
                <div id="menu-bar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/PostData">PostData</Link>
    </li>
  </ul>
</nav>
                </div>
                <div id="content">
                
           <Route path="/" exact component={APIHoc} ></Route>  
           <Route path="/PostData"  component={PostHoc} ></Route>  


                </div>
            </div>
    </Router>
        )
    }
}

export default Home