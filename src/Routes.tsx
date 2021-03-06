import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DevPage from './pages/DevPage';
import Landing from './pages/Landing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/page-dev/:theme/:username" component={DevPage}/>
            </Switch>
        </BrowserRouter>
    )
}