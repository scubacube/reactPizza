import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from "./components";
import {Cart, Main} from './pages';


function App() {

    return (
        <div className="wrapper">
            <Header />
            <Route exact path="/" component={Main}/>
            <Route path="/cart" component={Cart}/>
        </div>
    )
}

export default App;