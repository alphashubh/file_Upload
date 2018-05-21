import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './component/app';
import Upload from './component/upload';
import Login from './component/login';
import SignUp from './component/signUp';
import About from './component/about';
import Contact from './component/contact';
import Pricing from './component/pricing';

// const store=configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

render(<Provider
//  store={store}
 >
         <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/upload' component={Upload}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/pricing' component={Pricing}/>
        </Router>
        </Provider>
    , document.getElementById('root'));
