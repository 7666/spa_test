import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/goods';
import './App.css';

const LIST = [{
    text: 'welcome',
    url: '/'
}, {
    text: 'goods',
    url: '/goods'
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="nav_bar">
                    <Nav list={LIST} />
                </div>
                <div className="conent">
                    <Welcome />
                    <Goods />
                </div>
            </div>
        );
    }
}

export default App;
