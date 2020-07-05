import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Testes from './src/pages/Testes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Testes} />
            </Switch>
        </BrowserRouter>
    );
}