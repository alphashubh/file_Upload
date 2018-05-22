import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as signupAction from '../actions/signup-action';

import Header from './header';

class SignUp extends React.Component{
    signupMethod(e){
        e.preventDefault();
        console.log('in signupmethod');
        var data ={
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            alternateEmail: this.refs.altEmail.value,
            mobileNumber: this.refs.mobileNumber.value,
            password: this.refs.password.value,
            confirmPassword: this.refs.confirmPassword.value,
        }
        console.log('in signupmethod1');        
        this.props.action.signupAction(data);
        console.log('in signupmethod2');
        
    }
    render(){
        return(
            <div>
                <Header />
                <form className="col-md-4 col-md-offset-4" onSubmit={this.signupMethod.bind(this)}>
                <div className="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" class="form-control" id="firstName" ref="firstName"
                        required />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" class="form-control" id="lastName" ref="lastName"
                        required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" ref="email"
                        required />
                    </div>
                    <div className="form-group">
                        <label for="altEmail">Alternate Email address:</label>
                        <input type="email" class="form-control" id="altEmail" ref="altEmail"
                        required />
                    </div>
                    <div className="form-group">
                        <label for="mobileNumber">Mobile Number:</label>
                        <input type="number" class="form-control" id="mobileNumber" ref="mobileNumber"
                        required/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" ref="password"
                        required/>
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirmPassword" ref="confirmPassword"
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
function mapStateToProps(state){
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(signupAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);