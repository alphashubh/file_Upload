import React from 'react';

import Header from './header';

export default class Login extends React.Component {
    render() {
        return (
            <div >
            <Header />
                <form className="col-md-4 col-md-offset-4">
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" 
                        required />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" 
                        required/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}