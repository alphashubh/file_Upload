import React from 'react';

import Header from './header';

export default class SignUp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <form className="col-md-4 col-md-offset-4">
                <div className="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" class="form-control" id="firstName" 
                        required />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" class="form-control" id="lastName" 
                        required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" 
                        required />
                    </div>
                    <div className="form-group">
                        <label for="altEmail">Alternate Email address:</label>
                        <input type="email" class="form-control" id="altEmail" 
                        required />
                    </div>
                    <div className="form-group">
                        <label for="mobileNumber">Mobile Number:</label>
                        <input type="number" class="form-control" id="mobileNumber" 
                        required/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" 
                        required/>
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirmPassword" 
                        required/>
                    </div>
                    {/* <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div> */}
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}