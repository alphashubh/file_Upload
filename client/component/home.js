import React from 'react';

import Header from './header';
import TopHeader from './topHeader';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                 <div class="container-fluid" style={{backgroundColor:'#F44336',color:'#fff',height:'200px'}}>
                    <TopHeader />
                </div>
                <div data-spy="affix" data-offset-top="197">
                <Header />
                </div>
                <div class="container-fluid" style={{height:'1000px'}}>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
  <h1>Some text to enable scrolling</h1>
</div>
            </div>
        )
    }
}