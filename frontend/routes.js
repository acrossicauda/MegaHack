import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Testes from './src/pages/Testes';
//import Menu from './src/pages/Menu';


export default function Routes() {

    return (
       <BrowserRouter>
            <Switch>
                 <Route path="/teste" exact component={Testes} />
            </Switch>
       </BrowserRouter>

        
    );
}