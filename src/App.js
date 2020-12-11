import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/starred" component={Starred}></Route>
                    <Route>This page is not found</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
