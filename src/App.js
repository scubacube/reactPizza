import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Header} from "./components";
import {Cart, Main} from './pages';


function App() {
    return (
        <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/cart" component={Cart}/>
              <Route path='*'><Redirect to='/'/></Route>
            </Switch>
        </div>
    )
}

export default App;