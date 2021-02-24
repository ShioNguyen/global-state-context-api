import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Readlist from './components/Readlist';
import Read from './components/Read';
import Add from './components/Add';

import {AppProvider} from './context/AppProvider';

import './App.css';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Header/>
                <div className="l-container">
                    <Switch>
                        <Route exact path='/'>
                            <Readlist/>
                        </Route>
                        <Route path='/read'>
                            <Read/>
                        </Route>
                        <Route path='/add'>
                            <Add/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
