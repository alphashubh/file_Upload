import React from 'react';
import { Link } from 'react-router';


export default class Header extends React.Component {
    render() {
        return (
            <div>
               
                <nav class="navbar navbar-inverse" >
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">My App</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li ><Link to='/'>Home</Link></li>
                            <li ><Link to='/upload'>Upload</Link></li>
                            <li ><Link to='/about'>About Us</Link></li>
                            <li ><Link to='/contact'>Contact Us</Link></li>
                            <li ><Link to='/pricing'>Pricing</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to='/signup'><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to='/login'><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}