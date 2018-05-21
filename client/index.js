import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './component/app';
import Upload from './component/upload';

// const store=configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

render(<Provider
//  store={store}
 >
         <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/upload' component={Upload}/>
        </Router>
        </Provider>
    , document.getElementById('root'));
